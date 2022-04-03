using System.Net;
using SzopAPI.Data.Model;
using ExcelDataReader;
using System.Text.RegularExpressions;
using System;


namespace SzopAPI.Data
{
    public class LoadPoints
    {
        /// <summary>
        /// Downloading file from given URL to External Folder
        /// </summary>
        /// <param name="url">URL to file</param>
        /// <returns>true if download was successful, false if wasn't</returns>
        public static string DownloadFile(string url)
        {
            //download file from given url
            string fileName = url;
            string returnMessage = "";
            using (var webClient = new WebClient())
            {
                try
                {
                    int lastIndex = fileName.LastIndexOf('/');
                    int length = fileName.Length - lastIndex;

                    fileName = fileName.Substring(fileName.Length - length);

                    webClient.DownloadFile(url, "Data/External/Temp/" + fileName);

                }
                catch (Exception e)
                {
                    System.Diagnostics.Debug.WriteLine("Failed to download file: {0}", e);
                    return "Exception caught! Failed to download file.";
                }
            }

            //check if file exist in PointsSheets directory
            string[] files = Directory.GetFiles("Data/External/PointsSheets/", "*.xlsx");
            foreach (var file in files)
            {
                int lastIndex = file.LastIndexOf('/');
                int length = file.Length - lastIndex;
                var fileName2 = file.Substring(file.Length - length);

                //if exists
                if (fileName.Equals(fileName2))
                {
                    System.Diagnostics.Debug.WriteLine("The same file already exists! Comparing...");
                    //if files are the same: delete downloaded file
                    bool same = CompareFiles(file, "Data/External/Temp/" + fileName);
                    if (same)
                    {
                        DeleteFile("Data/External/Temp/" + fileName);
                        return "The same file already exists. No difference detected. No changes have been made";
                    }
                    else //if they are not the same replace old file with the downloaded one
                    {
                        DeleteFile(file);
                        File.Move("Data/External/Temp/" + fileName, file);
                        UpdateVersion();
                        return "Although The same file already exists it is not the same. Updated xlsx file.";
                    }
                }
            }

            //if the file doesnt exist in PointsSheets directory: move downloaded file to PointsSheets directory
            File.Move("Data/External/Temp/" + fileName, "Data/External/PointsSheets/" + fileName);
            UpdateVersion();

            return "No file with the same name detected. Downloaded file has been moved to PointsSheets";
        }

        public static List<Point> LoadPointFromXLSX(string fileName)
        {
            List<Point> points = new List<Point>();
            try
            {
                using (var stream = File.Open("Data/External/PointsSheets/" + fileName, FileMode.Open, FileAccess.Read))
                {
                    using (var reader = ExcelReaderFactory.CreateReader(stream))
                    {
                        int i = 0;
                        do
                        {
                            while (reader.Read())
                            {
                                if (i > 0 && reader.GetValue(0) != null)
                                {
                                    Point point = new Point();

                                    point.PointId = Convert.ToInt32(reader.GetDouble(0));
                                    point.Street = reader.GetString(1);
                                    point.Sector = reader.GetString(2);
                                    point.Estate = reader.GetString(3);
                                    //daty
                                    point.OpeningDateTimes = new List<DateTime>();
                                    string allDates = reader.GetString(4);
                                    string pattern = @"\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])\ (0[0-9]|1[0-9]|2[0-4])\:([0-5][0-9])";
                                    Regex re = new Regex(pattern);

                                    foreach (Match match in re.Matches(allDates))
                                    {
                                        DateTime date = DateTime.Parse(match.Value);
                                        point.OpeningDateTimes.Add(date);
                                    }
                                    //
                                    point.Latitude = Convert.ToDouble(reader.GetString(5).Replace('.', ','));
                                    point.Longitude = Convert.ToDouble(reader.GetString(6).Replace('.', ','));
                                    point.Description = reader.GetString(7);
                                    points.Add(point);

                                }
                                i++;
                            }
                        } while (reader.NextResult());
                    }
                }
            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine("Failed to load points from the XLSX file: {0}", e);
            }

            return points;

        }

        /// <summary>
        /// Compares 2 files
        /// </summary>
        /// <param name="filePath1">Path to first file</param>
        /// <param name="filePath2">Path to second file</param>
        /// <returns>True if files are the same, false if they are not</returns>
        private static bool CompareFiles(string filePath1, string filePath2)
        {

            int file1byte;
            int file2byte;
            FileStream fs1;
            FileStream fs2;

            if (filePath1 == filePath2)
            {
                return true;
            }

            fs1 = new FileStream(filePath1, FileMode.Open, FileAccess.Read);
            fs2 = new FileStream(filePath2, FileMode.Open, FileAccess.Read);


            if (fs1.Length != fs2.Length)
            {
                fs1.Close();
                fs2.Close();

                return false;
            }

            do
            {
                file1byte = fs1.ReadByte();
                file2byte = fs2.ReadByte();
            }
            while ((file1byte == file2byte) && (file1byte != -1));

            fs1.Close();
            fs2.Close();


            return ((file1byte - file2byte) == 0);
        }

        public static async Task UpdateVersion()
        {
            var now = DateTime.Now;
            var text = now.ToString();

            await File.WriteAllTextAsync("Data/version.txt", text);
        }

        public static void DeleteFile(string filePath)
        {
            if (File.Exists(filePath))
            {
                try
                {
                    File.Delete(filePath);
                }
                catch (Exception e)
                {
                    System.Diagnostics.Debug.WriteLine("Failed to delete file: {0}", e);
                }
            }
        }

        public static string GetVersion()
        {
            var version = File.ReadAllText("Data/version.txt");
            return version;
        }

    }

}