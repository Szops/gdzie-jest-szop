using System.Net;
using SzopAPI.Data.Model;
using ExcelDataReader;

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
                            if (i > 0)
                            {
                                Point point = new Point();

                                point.PointId = Convert.ToInt32(reader.GetDouble(0));
                                point.Street = reader.GetString(1);
                                point.Sector = reader.GetString(2);
                                point.Estate = reader.GetString(3);
                                //jeszcze daty
                                point.Latitude = Convert.ToDouble(reader.GetString(5).Replace('.', ','));
                                point.Longitude = Convert.ToDouble(reader.GetString(6).Replace('.', ','));
                                point.Description = reader.GetString(7);
                                //System.Diagnostics.Debug.WriteLine(point.Street + i.ToString());
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