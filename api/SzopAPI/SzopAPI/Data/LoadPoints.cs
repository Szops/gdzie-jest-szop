using System.Net;
using SzopAPI.Data.Model;
using ExcelDataReader;
using System.Text.RegularExpressions;

namespace SzopAPI.Data
{
    public class LoadPoints
    {
        /// <summary>
        /// Downloading file from given URL to External Folder
        /// </summary>
        /// <param name="url">URL to file</param>
        /// <returns>true if download was successful, false if wasn't</returns>
        public static bool DownloadFile(string url)
        {
            string fileName = url;
            bool success = false;
            using (var webClient = new WebClient())
            {
                try
                {
                    int lastIndex = fileName.LastIndexOf('/');
                    int length = fileName.Length - lastIndex;

                    fileName = fileName.Substring(fileName.Length - length);

                    webClient.DownloadFile(url, "Data/External/PointsSheets/" + fileName);

                }
                catch (Exception e)
                {
                    return success;
                }
            }
            success = true;
            return success;
        }

        public static List<Point> LoadPointFromXLSX(string fileName)
        {
            List<Point> points = new List<Point>();

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

            return points;

        }
    }

}