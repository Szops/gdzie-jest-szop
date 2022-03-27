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
            LoadJSONFile("Data/External/allpoints.json");
        }

        private void LoadJSONFile(string path)
        {
            using (StreamReader r = new StreamReader(path))
            {
                string json = r.ReadToEnd();
                points = JsonConvert.DeserializeObject<List<Point>>(json);
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