import { useState } from "react";
import { ForestBackground, Header, GlassCard, Button, FormInput, FormSelect, FormCheckbox, FormTextarea } from "@/components/ui";

const Stammdaten = () => {
  const [formData, setFormData] = useState({
    baumNr: "184", baumartLat: "Prunus avium", baumartDeut: "Vogelkirsche", pflanzdatum: "",
    erstaufnahme: "23.06.2010", stu: "", plnr: "", hoehe: "", stammumfang: "", ansatzhoehe: "1.5",
    erhaltung: "Wert", erhebung: "Manuell", zustand: "gut", altersklasse: "jung", hochkronen: "ja",
  });
  const [schaedenAllgemein, setSchaedenAllgemein] = useState<string[]>([]);
  const [wurzelraumSchaeden, setWurzelraumSchaeden] = useState<string[]>([]);
  const [massnahmen, setMassnahmen] = useState<string[]>([]);

  const toggle = (value: string, state: string[], setState: React.Dispatch<React.SetStateAction<string[]>>) => {
    setState(state.includes(value) ? state.filter((v) => v !== value) : [...state, value]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ formData, schaedenAllgemein, wurzelraumSchaeden, massnahmen });
  };

  return (
    <ForestBackground>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <GlassCard className="max-w-5xl mx-auto animate-slide-up">
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">Stammdatenerfassung</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <FormInput id="baumNr" label="Baum-Nr." value={formData.baumNr} onChange={(e) => setFormData({ ...formData, baumNr: e.target.value })} />
                <FormInput id="baumartLat" label="Baumart (lat.)" value={formData.baumartLat} onChange={(e) => setFormData({ ...formData, baumartLat: e.target.value })} />
                <FormInput id="baumartDeut" label="Baumart (deut.)" value={formData.baumartDeut} onChange={(e) => setFormData({ ...formData, baumartDeut: e.target.value })} />
                <FormInput id="pflanzdatum" label="Pflanzdatum" placeholder="z. B. 01.04.2008" value={formData.pflanzdatum} onChange={(e) => setFormData({ ...formData, pflanzdatum: e.target.value })} />
                <FormInput id="erstaufnahme" label="Erstaufnahme" value={formData.erstaufnahme} onChange={(e) => setFormData({ ...formData, erstaufnahme: e.target.value })} />
                <FormInput id="stu" label="STU [cm]" placeholder="z. B. 53" value={formData.stu} onChange={(e) => setFormData({ ...formData, stu: e.target.value })} />
                <FormInput id="plnr" label="Pl.nr" placeholder="z. B. 23" value={formData.plnr} onChange={(e) => setFormData({ ...formData, plnr: e.target.value })} />
                
                <div className="pt-4">
                  <h3 className="form-section-title">Erhebungsbogen</h3>
                  <div className="space-y-4">
                    <FormInput id="hoehe" label="Höhe [m]" placeholder="z. B. 7.6" value={formData.hoehe} onChange={(e) => setFormData({ ...formData, hoehe: e.target.value })} />
                    <FormInput id="stammumfang" label="Stammumfang [cm]" placeholder="z. B. 53" value={formData.stammumfang} onChange={(e) => setFormData({ ...formData, stammumfang: e.target.value })} />
                    <FormInput id="ansatzhoehe" label="Ansatzhöhe [m]" value={formData.ansatzhoehe} onChange={(e) => setFormData({ ...formData, ansatzhoehe: e.target.value })} />
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="form-section-title">Allgemein</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Risse", "Rippen", "Wundfälle", "Keimfaule", "Zwiesel", "Keine Schäden", "Verbiss", "Biberverbiss"].map((item) => (
                      <FormCheckbox key={item} id={`allgemein-${item}`} label={item} checked={schaedenAllgemein.includes(item)} onChange={() => toggle(item, schaedenAllgemein, setSchaedenAllgemein)} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <FormSelect id="erhaltung" label="Erhaltung" value={formData.erhaltung} options={[{ value: "Wert", label: "Wert" }, { value: "Gut", label: "Gut" }, { value: "Mittel", label: "Mittel" }, { value: "Schlecht", label: "Schlecht" }]} onChange={(e) => setFormData({ ...formData, erhaltung: e.target.value })} />
                <FormSelect id="erhebung" label="Erhebung" value={formData.erhebung} options={[{ value: "Manuell", label: "Manuell" }, { value: "Digital", label: "Digital" }]} onChange={(e) => setFormData({ ...formData, erhebung: e.target.value })} />
                <FormSelect id="zustand" label="Zustand von" value={formData.zustand} options={[{ value: "gut", label: "gut" }, { value: "mittel", label: "mittel" }, { value: "schlecht", label: "schlecht" }]} onChange={(e) => setFormData({ ...formData, zustand: e.target.value })} />
                <FormSelect id="altersklasse" label="Altersklasse" value={formData.altersklasse} options={[{ value: "jung", label: "jung" }, { value: "mittel", label: "mittel" }, { value: "alt", label: "alt" }]} onChange={(e) => setFormData({ ...formData, altersklasse: e.target.value })} />
                <FormSelect id="hochkronen" label="Hochkronen" value={formData.hochkronen} options={[{ value: "ja", label: "ja" }, { value: "nein", label: "nein" }]} onChange={(e) => setFormData({ ...formData, hochkronen: e.target.value })} />
                
                <div className="pt-4">
                  <h3 className="form-section-title">Wurzelraum / Schäden</h3>
                  <div className="space-y-3">
                    {["Bewuchs: Sträucher", "Bodenbelag: Erde", "Bodenverdichtung", "Wurzelauffälligkeit", "Keine sichtbaren Schäden", "Wurzelfäule", "Pilzbefall"].map((item) => (
                      <FormCheckbox key={item} id={`wurzel-${item}`} label={item} checked={wurzelraumSchaeden.includes(item)} onChange={() => toggle(item, wurzelraumSchaeden, setWurzelraumSchaeden)} />
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="form-section-title">Maßnahmen / Notizen</h3>
                  <p className="text-sm text-text-secondary mb-3">Maßnahmen</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {["Dürrohtentfernung", "Aufasten", "Kronenpflege", "Kronenanpassung", "EFU", "Rodung"].map((item) => (
                      <FormCheckbox key={item} id={`massnahme-${item}`} label={item} checked={massnahmen.includes(item)} onChange={() => toggle(item, massnahmen, setMassnahmen)} />
                    ))}
                  </div>
                  <FormTextarea id="beschreibung" label="Beschreibung / Anmerkung" placeholder="Kurze Beschreibung..." rows={3} />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-4 pt-4 border-t border-black/[0.06]">
              <Button type="button" variant="outline">Ändern</Button>
              <Button type="submit" variant="primary">Speichern</Button>
            </div>
          </form>
        </GlassCard>
      </main>
    </ForestBackground>
  );
};

export default Stammdaten;
