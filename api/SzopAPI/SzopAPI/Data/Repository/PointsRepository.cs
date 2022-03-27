using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using SzopAPI.Data.Interface;
using SzopAPI.Data.Model;
using Newtonsoft.Json;

namespace SzopAPI.Data
{
    public class PointsRepository : IPoints
    {
        List<Point> points = new List<Point>();

        public PointsRepository()
        {
            loadAllPointsSheets();
        }

        private void LoadJSONFile(string path)
        {
            using (StreamReader r = new StreamReader(path))
            {
                string json = r.ReadToEnd();
                points = JsonConvert.DeserializeObject<List<Point>>(json);
            }
        }

        private void loadAllPointsSheets()
        {
            string[] files = Directory.GetFiles("Data/External/PointsSheets/", "*.xlsx");
            foreach (var file in files)
            {
                int lastIndex = file.LastIndexOf('/');
                int length = file.Length - lastIndex;
                var fileName = file.Substring(file.Length - length);

                List<Point> loadedPoints = LoadPoints.LoadPointFromXLSX(fileName);
                points.AddRange(loadedPoints);
            }
        }

        public List<Point> GetAllPoints()
        {
            return points;
        }

        public Point GetPoint(int id)
        {
            return points.FirstOrDefault(x => x.PointId == id);
        }
    }
}