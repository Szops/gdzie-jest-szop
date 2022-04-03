export function DistanceTo(lat1, lon1, lat2, lon2) {
  const rlat1 = (Math.PI * lat1) / 180;
  const rlat2 = (Math.PI * lat2) / 180;
  const theta = lon1 - lon2;
  const rtheta = (Math.PI * theta) / 180;
  let dist =
    Math.Sin(rlat1) * Math.Sin(rlat2) +
    Math.Cos(rlat1) * Math.Cos(rlat2) * Math.Cos(rtheta);
  dist = Math.Acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;

  dist = dist * 1.609344;

  return dist;
}
