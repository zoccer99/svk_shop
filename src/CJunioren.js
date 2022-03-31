import ContactJunior from "./ContactJunior";

const CJunioren = () => {
  return (
    <div className="container-fluid w-lg-75">
     <blockquote class="blockquote">
          <h1 class="mb-0">
           C-Junioren
          </h1>
          <h2 class="blockquote-footer pt-4 ">
           Kreisliga Saison 
          </h2>
        </blockquote>
      <ContactJunior
        verantwortliche="Karsten Krause (Trainer), Christian Gebert (Nachwuchsleiter)"
        telefon="+49 178 3555708"
        anschrift="Mittelstraße 28"
        ort="Kretzschau"
        zeit="Mittwoch 17.00-18.30"
        spieltag="Freitag 17.00 - 18.30"
      />
    </div>
  );
};

export default CJunioren;
