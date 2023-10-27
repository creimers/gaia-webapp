const TEAM = [
  {
    name: "João Vasco Silva",
    affiliation: "International Maize and Wheat Improvement Center",
    location: "Harare, Zimbabwe",
    email: "",
  },
  {
    name: "Fernando Aramburu-Merlos",
    affiliation: "University of Nebraska-Lincoln",
    location: "Lincoln, United States of America",
    email: "",
  },
  {
    name: "Frédéric Baudron",
    affiliation:
      "French Agricultural Research Centre for International Development",
    location: "Montpellier, France",
    email: "",
  },
  {
    name: "Samuel Gameda",
    affiliation: "International Maize and Wheat Improvement Center",
    location: "Addis Ababa, Ethiopia",
    email: "",
  },
  {
    name: "Joel Meliyo",
    affiliation: "Tanzania Agricultural Research Institute",
    location: "Dodoma, Tanzania",
    email: "",
  },
  {
    name: "Vicky Ruganzu",
    affiliation: "Rwanda Agriculture and Animal Resources Development Board",
    location: "Kigali, Rwanda",
    email: "",
  },
  {
    name: "Temesgn Desalegn",
    affiliation: "Ethiopian Institute of Agricultural Research",
    location: "Addis Ababa, Ethiopia",
    email: "",
  },
  {
    name: "Tesfaye Sida",
    affiliation: "International Maize and Wheat Improvement Center",
    location: "Addis Ababa, Ethiopia",
    email: "",
  },
  {
    name: "Moti Jaleta",
    affiliation: "International Maize and Wheat Improvement Center",
    location: "Addis Ababa, Ethiopia",
    email: "",
  },
  {
    name: "Jordan Chamberlin",
    affiliation: "International Maize and Wheat Improvement Center",
    location: "Nairobi, Kenya",
    email: "",
  },
  {
    name: "Robert J. Hijmans",
    affiliation: "University of California-Davis",
    location: "Davis, United States of America",
    email: "",
  },
];
export default function Team() {
  return (
    <div className="prose">
      <h1>Team</h1>
      {TEAM.map((member) => (
        <div key={member.name}>
          <h2>{member.name}</h2>
          <p>{member.affiliation}</p>
          <p>{member.location}</p>
        </div>
      ))}
    </div>
  );
}
