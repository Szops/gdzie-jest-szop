using System.Net;

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
            bool success = false;
            using (var webClient = new WebClient())
            {
                try
                {
                    string fileName = url;
                    int lastIndex = fileName.LastIndexOf('/');
                    int length = fileName.Length - lastIndex;

                    fileName = fileName.Substring(fileName.Length - length);

                    webClient.DownloadFile(url, "Data/External/" + fileName);

                }
                catch (Exception e)
                {
                    return success;
                }
            }
            success = true;
            return success;
        }


    }

}