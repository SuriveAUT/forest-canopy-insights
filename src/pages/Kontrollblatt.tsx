import { useState } from "react";
import ForestBackground from "@/components/layout/ForestBackground";
import Header from "@/components/layout/Header";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/ForestButton";
import FormInput from "@/components/forms/FormInput";
import FormCheckbox from "@/components/forms/FormCheckbox";
import FormTextarea from "@/components/forms/FormTextarea";

const Kontrollblatt = () => {
  const [allgemein, setAllgemein] = useState<string[]>([]);
  const [wurzelraum, setWurzelraum] = useState<string[]>([]);
  const [wurzelschaeden, setWurzelschaeden] = useState<string[]>([]);
  const [stammschaeden, setStammschaeden] = useState<string[]>([]);
  const [konflikte, setKonflikte] = useState<string[]>([]);
  const [massnahmen, setMassnahmen] = useState<string[]>([]);

  const handleCheckboxChange = (
    value: string,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (state.includes(value)) {
      setState(state.filter((v) => v !== value));
    } else {
      setState([...state, value]);
    }
  };

  return (
    <ForestBackground>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <GlassCard className="max-w-6xl mx-auto animate-slide-up">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/[0.06]">
            <h1 className="text-xl md:text-2xl font-bold text-text-primary">
              Baumkataster Marchfeldkanal - Kontrollblatt
            </h1>
            <Button variant="outline" size="sm">
              Stammdaten
            </Button>
          </div>
          
          {/* Top Info Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 pb-6 border-b border-black/[0.06]">
            <div>
              <span className="form-label">Baum-Nr.:</span>
              <span className="text-text-primary font-medium ml-2">184</span>
            </div>
            <div>
              <span className="form-label">Baumart lat.</span>
              <span className="text-text-primary font-medium ml-2">Prunus avium</span>
            </div>
            <div>
              <span className="form-label">Baumart dt.</span>
              <span className="text-text-primary font-medium ml-2">Vogelkirsche</span>
            </div>
            <div className="col-span-2">
              <span className="form-label">Erstaufnahme</span>
              <span className="text-text-primary font-medium ml-2">23.06.2010</span>
            </div>
          </div>
          
          {/* Second Info Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-black/[0.06]">
            <div>
              <span className="form-label">Pflanzdatum</span>
              <span className="text-text-primary font-medium ml-2">–</span>
            </div>
            <div>
              <span className="form-label">Abschnitt</span>
              <span className="text-text-primary font-medium ml-2">Brücke ...</span>
            </div>
            <div>
              <span className="form-label">Erheber</span>
              <span className="text-text-primary font-medium ml-2">Nowak Edith</span>
            </div>
            <div>
              <span className="form-label">STU [cm]</span>
              <span className="text-text-primary font-medium ml-2">74</span>
            </div>
          </div>
          
          {/* Third Info Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 pb-6 border-b border-black/[0.06]">
            <div>
              <span className="form-label">Erhebungsbogen</span>
              <span className="text-text-primary font-medium ml-2">198</span>
            </div>
            <div>
              <span className="form-label">Datum</span>
              <span className="text-text-primary font-medium ml-2">03.04.2025</span>
            </div>
            <div>
              <span className="form-label">Bestandsform</span>
              <span className="text-text-primary font-medium ml-2">Solitär</span>
            </div>
            <div>
              <span className="form-label">Wuchsform</span>
              <span className="text-text-primary font-medium ml-2">Hochstamm</span>
            </div>
          </div>
          
          {/* Main Checkbox Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Allgemein */}
            <div>
              <h3 className="form-section-title">Allgemein</h3>
              <div className="space-y-2">
                {[
                  { label: "Höhe [m]", value: "7,0" },
                  { label: "Stammanzahl", value: "1" },
                  { label: "STU [cm]", value: "53" },
                  { label: "Ansatzhöhe [m]", value: "1,5" },
                  { label: "Kronendurchmesser", value: "6" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-1">
                    <FormCheckbox
                      id={`allgemein-${item.label}`}
                      label={item.label}
                      checked={allgemein.includes(item.label)}
                      onChange={() => handleCheckboxChange(item.label, allgemein, setAllgemein)}
                    />
                    <span className="text-text-primary font-medium text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Wurzelraum */}
            <div>
              <h3 className="form-section-title">Wurzelraum</h3>
              <div className="space-y-2">
                {["Bewuchs: Sträucher", "Bodenbelag: Erde", "Bodenverdichtung", "Bodenauffüllung", "Bodeneintiefung", "Sonstige", "KEINE Beeinträchtigung"].map((item) => (
                  <FormCheckbox
                    key={item}
                    id={`wurzelraum-${item}`}
                    label={item}
                    checked={wurzelraum.includes(item)}
                    onChange={() => handleCheckboxChange(item, wurzelraum, setWurzelraum)}
                  />
                ))}
              </div>
            </div>
            
            {/* Wurzelschäden */}
            <div>
              <h3 className="form-section-title">Wurzelschäden</h3>
              <div className="space-y-2">
                {["Luftabschuss", "Kappung", "Aufgrabung", "Pilzbefall", "Mechanische Verletzung", "Wurzelfäule", "KEINE sichtbaren Schäden"].map((item) => (
                  <FormCheckbox
                    key={item}
                    id={`wurzelschaeden-${item}`}
                    label={item}
                    checked={wurzelschaeden.includes(item)}
                    onChange={() => handleCheckboxChange(item, wurzelschaeden, setWurzelschaeden)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Second Checkbox Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Stammschäden / Kronenschäden */}
            <div>
              <h3 className="form-section-title">Stammschäden / Kronenschäden</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {["Risse", "Rippen", "Wundfälle", "Keimfaule", "Zwiesel", "Anfahrschäden", "Aufbau: terminalastig", "Mantel geschlossen", "Astbruch", "Kronenkappung", "Zwieselbildung", "Totholz"].map((item) => (
                  <FormCheckbox
                    key={item}
                    id={`stammschaeden-${item}`}
                    label={item}
                    checked={stammschaeden.includes(item)}
                    onChange={() => handleCheckboxChange(item, stammschaeden, setStammschaeden)}
                  />
                ))}
              </div>
            </div>
            
            {/* Konflikte / Maßnahmen */}
            <div>
              <h3 className="form-section-title">Konflikte / Maßnahmen</h3>
              <div className="space-y-2 mb-4">
                {["Leitungen betroffen", "Einsicht in Kreuzung", "Sonstige Konflikte", "KEINE Konflikte"].map((item) => (
                  <FormCheckbox
                    key={item}
                    id={`konflikte-${item}`}
                    label={item}
                    checked={konflikte.includes(item)}
                    onChange={() => handleCheckboxChange(item, konflikte, setKonflikte)}
                  />
                ))}
              </div>
              
              <div className="space-y-2 pt-2 border-t border-black/[0.06]">
                {[
                  "Maßnahmen: Dürreholzentf. (THB)",
                  "Aufasten",
                  "Kronenpflege",
                  "Kronenanpassung (KEK)",
                  "Lichtraumprofil (LRP)",
                  "Schädlingsbekämpfung",
                  "Rodung / Ersatz",
                  "Bibernschutz",
                  "Sonstige",
                  "KEINE Maßnahmen",
                ].map((item) => (
                  <FormCheckbox
                    key={item}
                    id={`massnahmen-${item}`}
                    label={item}
                    checked={massnahmen.includes(item)}
                    onChange={() => handleCheckboxChange(item, massnahmen, setMassnahmen)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Anmerkung Section */}
          <div className="pt-6 border-t border-black/[0.06]">
            <h3 className="form-section-title">Anmerkung</h3>
            <FormTextarea
              id="anmerkung"
              placeholder="Hier steht Platz für ausführliche Beschreibungen, Beobachtungen und erklärte Maßnahmen."
              rows={4}
            />
          </div>
        </GlassCard>
      </main>
    </ForestBackground>
  );
};

export default Kontrollblatt;
