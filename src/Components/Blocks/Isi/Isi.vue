<template>
  <div
    :class="{
      isi: true,
      'isi-static': static,
      'isi-hidden': hideElement,
      'isi-opened': openedIsi && !hideElement,
      'isi-opened-menu': mobileMenuState,
    }"
  >
    <div class="isi-container">
      <div class="isi-top container__wrapper">
        <button
        class="isi__expand-button"
        @click="toggleISI"
        v-if="!static"
      ></button>
        <div class="isi-maxw-container">
          <div class="isi__content">
            <h3>Indication</h3>

            <ul class="list">
              <li>
                KEYTRUDA is indicated for the adjuvant treatment of patients
                with renal cell carcinoma (RCC) at intermediate-high or high
                risk of recurrence following nephrectomy, or following
                nephrectomy and resection of metastatic lesions.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="isi-bottom container__wrapper">
        <div class="isi-maxw-container">
          <div class="isi__content">
            <h3>Selected Safety Information</h3>
            <h5>Severe and Fatal Immune-Mediated Adverse Reactions</h5>
            <ul class="list">
              <li>
                KEYTRUDA is a monoclonal antibody that belongs to a class of
                drugs that bind to either the programmed death receptor-1 (PD-1)
                or the programmed death ligand 1 (PD-L1), blocking the
                PD-1/PD-L1 pathway, thereby removing inhibition of the immune
                response, potentially breaking peripheral tolerance and inducing
                immune-mediated adverse reactions. Immune-mediated adverse
                reactions, which may be severe or fatal, can occur in any organ
                system or tissue, can affect more than one body system
                simultaneously, and can occur at any time after starting
                treatment or after discontinuation of treatment. Important
                immune-mediated adverse reactions listed here may not include
                all possible severe and fatal immune-mediated adverse reactions.
              </li>
              <li>
                Monitor patients closely for symptoms and signs that may be
                clinical manifestations of underlying immune-mediated adverse
                reactions. Early identification and management are essential to
                ensure safe use of anti–PD-1/PD-L1 treatments. Evaluate liver
                enzymes, creatinine, and thyroid function at baseline and
                periodically during treatment. In cases of suspected
                immune-mediated adverse reactions, initiate appropriate workup
                to exclude alternative etiologies, including infection.
                Institute medical management promptly, including specialty
                consultation as appropriate.
              </li>

              <li>
                Withhold or permanently discontinue KEYTRUDA depending on
                severity of the immune-mediated adverse reaction. In general, if
                KEYTRUDA requires interruption or discontinuation, administer
                systemic corticosteroid therapy (1 to 2 mg/kg/day prednisone or
                equivalent) until improvement to Grade 1 or less. Upon
                improvement to Grade 1 or less, initiate corticosteroid taper
                and continue to taper over at least 1 month. Consider
                administration of other systemic immunosuppressants in patients
                whose adverse reactions are not controlled with corticosteroid
                therapy.
              </li>
            </ul>

            <p><u>Immune-Mediated Pneumonitis</u></p>

            <ul class="list">
              <li>
                KEYTRUDA can cause immune-mediated pneumonitis. The incidence is
                higher in patients who have received prior thoracic radiation.
                Immune-mediated pneumonitis occurred in 3.4% (94/2799) of
                patients receiving KEYTRUDA, including fatal (0.1%), Grade 4
                (0.3%), Grade 3 (0.9%), and Grade 2 (1.3%) reactions. Systemic
                corticosteroids were required in 67% (63/94) of patients.
                Pneumonitis led to permanent discontinuation of KEYTRUDA in 1.3%
                (36) and withholding in 0.9% (26) of patients. All patients who
                were withheld reinitiated KEYTRUDA after symptom improvement; of
                these, 23% had recurrence. Pneumonitis resolved in 59% of the 94
                patients.
              </li>
            </ul>

            <p><u>Immune-Mediated Colitis</u></p>
            <ul class="list">
              <li>
                KEYTRUDA can cause immune-mediated colitis, which may present
                with diarrhea. Cytomegalovirus infection/reactivation has been
                reported in patients with corticosteroid-refractory
                immune-mediated colitis. In cases of corticosteroid-refractory
                colitis, consider repeating infectious workup to exclude
                alternative etiologies. Immune-mediated colitis occurred in 1.7%
                (48/2799) of patients receiving KEYTRUDA, including Grade 4
                (&#60;0.1%), Grade 3 (1.1%), and Grade 2 (0.4%) reactions.
                Systemic corticosteroids were required in 69% (33/48);
                additional immunosuppressant therapy was required in 4.2% of
                patients. Colitis led to permanent discontinuation of KEYTRUDA
                in 0.5% (15) and withholding in 0.5% (13) of patients. All
                patients who were withheld reinitiated KEYTRUDA after symptom
                improvement; of these, 23% had recurrence. Colitis resolved in
                85% of the 48 patients.
              </li>
            </ul>

            <p><u>Hepatotoxicity and Immune-Mediated Hepatitis</u></p>
            <p><i>KEYTRUDA as a Single Agent</i></p>

            <ul class="list">
              <li>
                KEYTRUDA can cause immune-mediated hepatitis. Immune-mediated
                hepatitis occurred in 0.7% (19/2799) of patients receiving
                KEYTRUDA, including Grade 4 (&#60;0.1%), Grade 3 (0.4%), and
                Grade 2 (0.1%) reactions. Systemic corticosteroids were required
                in 68% (13/19) of patients; additional immunosuppressant therapy
                was required in 11% of patients. Hepatitis led to permanent
                discontinuation of KEYTRUDA in 0.2% (6) and withholding in 0.3%
                (9) of patients. All patients who were withheld reinitiated
                KEYTRUDA after symptom improvement; of these, none had
                recurrence. Hepatitis resolved in 79% of the 19 patients.
              </li>
            </ul>

            <p><u>Immune-Mediated Endocrinopathies</u></p>
            <p><i>Adrenal Insufficiency</i></p>

            <ul class="list">
              <li>
                KEYTRUDA can cause primary or secondary adrenal insufficiency.
                For Grade 2 or higher, initiate symptomatic treatment, including
                hormone replacement as clinically indicated. Withhold KEYTRUDA
                depending on severity. Adrenal insufficiency occurred in 0.8%
                (22/2799) of patients receiving KEYTRUDA, including Grade 4
                (&#60;0.1%), Grade 3 (0.3%), and Grade 2 (0.3%) reactions.
                Systemic corticosteroids were required in 77% (17/22) of
                patients; of these, the majority remained on systemic
                corticosteroids. Adrenal insufficiency led to permanent
                discontinuation of KEYTRUDA in &#60;0.1% (1) and withholding in
                0.3% (8) of patients. All patients who were withheld reinitiated
                KEYTRUDA after symptom improvement.
              </li>
            </ul>

            <p><i>Hypophysitis</i></p>

            <ul class="list">
              <li>
                KEYTRUDA can cause immune-mediated hypophysitis. Hypophysitis
                can present with acute symptoms associated with mass effect such
                as headache, photophobia, or visual field defects. Hypophysitis
                can cause hypopituitarism. Initiate hormone replacement as
                indicated. Withhold or permanently discontinue KEYTRUDA
                depending on severity. Hypophysitis occurred in 0.6% (17/2799)
                of patients receiving KEYTRUDA, including Grade 4 (&#60;0.1%),
                Grade 3 (0.3%), and Grade 2 (0.2%) reactions. Systemic
                corticosteroids were required in 94% (16/17) of patients; of
                these, the majority remained on systemic corticosteroids.
                Hypophysitis led to permanent discontinuation of KEYTRUDA in
                0.1% (4) and withholding in 0.3% (7) of patients. All patients
                who were withheld reinitiated KEYTRUDA after symptom
                improvement.
              </li>
            </ul>

            <p><i>Thyroid Disorders</i></p>

            <ul class="list">
              <li>
                KEYTRUDA can cause immune-mediated thyroid disorders.
                Thyroiditis can present with or without endocrinopathy.
                Hypothyroidism can follow hyperthyroidism. Initiate hormone
                replacement for hypothyroidism or institute medical management
                of hyperthyroidism as clinically indicated. Withhold or
                permanently discontinue KEYTRUDA depending on severity.
                Thyroiditis occurred in 0.6% (16/2799) of patients receiving
                KEYTRUDA, including Grade 2 (0.3%). None discontinued, but
                KEYTRUDA was withheld in &#60;0.1% (1) of patients.
              </li>
              <li>
                Hyperthyroidism occurred in 3.4% (96/2799) of patients receiving
                KEYTRUDA, including Grade 3 (0.1%) and Grade 2 (0.8%). It led to
                permanent discontinuation of KEYTRUDA in &#60;0.1% (2) and
                withholding in 0.3% (7) of patients. All patients who were
                withheld reinitiated KEYTRUDA after symptom improvement.
                Hypothyroidism occurred in 8% (237/2799) of patients receiving
                KEYTRUDA, including Grade 3 (0.1%) and Grade 2 (6.2%). It led to
                permanent discontinuation of KEYTRUDA in &#60;0.1% (1) and
                withholding in 0.5% (14) of patients. All patients who were
                withheld reinitiated KEYTRUDA after symptom improvement. The
                majority of patients with hypothyroidism required long-term
                thyroid hormone replacement.
              </li>
            </ul>

            <p>
              <i
                >Type 1 Diabetes Mellitus (DM), Which Can Present With Diabetic
                Ketoacidosis</i
              >
            </p>

            <ul class="list">
              <li>
                Monitor patients for hyperglycemia or other signs and symptoms
                of diabetes. Initiate treatment with insulin as clinically
                indicated. Withhold KEYTRUDA depending on severity. Type 1 DM
                occurred in 0.2% (6/2799) of patients receiving KEYTRUDA. It led
                to permanent discontinuation in &#60;0.1% (1) and withholding of
                KEYTRUDA in &#60;0.1% (1) of patients. All patients who were
                withheld reinitiated KEYTRUDA after symptom improvement.
              </li>
            </ul>

            <p><u>Immune-Mediated Nephritis With Renal Dysfunction</u></p>

            <ul class="list">
              <li>
                KEYTRUDA can cause immune-mediated nephritis. Immune-mediated
                nephritis occurred in 0.3% (9/2799) of patients receiving
                KEYTRUDA, including Grade 4 (&#60;0.1%), Grade 3 (0.1%), and
                Grade 2 (0.1%) reactions. Systemic corticosteroids were required
                in 89% (8/9) of patients. Nephritis led to permanent
                discontinuation of KEYTRUDA in 0.1% (3) and withholding in 0.1%
                (3) of patients. All patients who were withheld reinitiated
                KEYTRUDA after symptom improvement; of these, none had
                recurrence. Nephritis resolved in 56% of the 9 patients.
              </li>
            </ul>

            <p><u>Immune-Mediated Dermatologic Adverse Reactions</u></p>
            <ul class="list">
              <li>
                KEYTRUDA can cause immune-mediated rash or dermatitis.
                Exfoliative dermatitis, including Stevens-Johnson syndrome, drug
                rash with eosinophilia and systemic symptoms, and toxic
                epidermal necrolysis, has occurred with anti–PD-1/PD-L1
                treatments. Topical emollients and/or topical corticosteroids
                may be adequate to treat mild to moderate nonexfoliative rashes.
                Withhold or permanently discontinue KEYTRUDA depending on
                severity. Immune-mediated dermatologic adverse reactions
                occurred in 1.4% (38/2799) of patients receiving KEYTRUDA,
                including Grade 3 (1%) and Grade 2 (0.1%) reactions. Systemic
                corticosteroids were required in 40% (15/38) of patients. These
                reactions led to permanent discontinuation in 0.1% (2) and
                withholding of KEYTRUDA in 0.6% (16) of patients. All patients
                who were withheld reinitiated KEYTRUDA after symptom
                improvement; of these, 6% had recurrence. The reactions resolved
                in 79% of the 38 patients.
              </li>
            </ul>

            <p><u>Other Immune-Mediated Adverse Reactions</u></p>
            <ul class="list">
              <li>
                The following clinically significant immune-mediated adverse
                reactions occurred at an incidence of &#60;1% (unless otherwise
                noted) in patients who received KEYTRUDA or were reported with
                the use of other anti–PD-1/PD-L1 treatments. Severe or fatal
                cases have been reported for some of these adverse reactions.
                <i>Cardiac/Vascular</i>: Myocarditis, pericarditis, vasculitis; <i>Nervous
                System</i>: Meningitis, encephalitis, myelitis and demyelination,
                myasthenic syndrome/myasthenia gravis (including exacerbation),
                Guillain-Barré syndrome, nerve paresis, autoimmune neuropathy;
                <i>Ocular</i>: Uveitis, iritis and other ocular inflammatory toxicities
                can occur. Some cases can be associated with retinal detachment.
                Various grades of visual impairment, including blindness, can
                occur. If uveitis occurs in combination with other
                immune-mediated adverse reactions, consider a
                Vogt-Koyanagi-Harada-like syndrome, as this may require
                treatment with systemic steroids to reduce the risk of permanent
                vision loss; <i>Gastrointestinal</i>: Pancreatitis, to include
                increases in serum amylase and lipase levels, gastritis,
                duodenitis; <i>Musculoskeletal and Connective Tissue</i>:
                Myositis/polymyositis, rhabdomyolysis (and associated sequelae,
                including renal failure), arthritis (1.5%), polymyalgia
                rheumatica; <i>Endocrine</i>: Hypoparathyroidism; <i>Hematologic/Immune</i>:
                Hemolytic anemia, aplastic anemia, hemophagocytic
                lymphohistiocytosis, systemic inflammatory response syndrome,
                histiocytic necrotizing lymphadenitis (Kikuchi lymphadenitis),
                sarcoidosis, immune thrombocytopenic purpura, solid organ
                transplant rejection.
              </li>
            </ul>

            <h5>Infusion-Related Reactions</h5>
            <ul class="list">
              <li>
                KEYTRUDA can cause severe or life-threatening infusion-related
                reactions, including hypersensitivity and anaphylaxis, which
                have been reported in 0.2% of 2799 patients receiving KEYTRUDA.
                Monitor for signs and symptoms of infusion-related reactions.
                Interrupt or slow the rate of infusion for Grade 1 or Grade 2
                reactions. For Grade 3 or Grade 4 reactions, stop infusion and
                permanently discontinue KEYTRUDA.
              </li>
            </ul>

            <h5>
              Complications of Allogeneic Hematopoietic Stem Cell
              Transplantation (HSCT)
            </h5>
            <ul class="list">
              <li>
                Fatal and other serious complications can occur in patients who
                receive allogeneic HSCT before or after anti–PD-1/PD-L1
                treatments. Transplant-related complications include hyperacute
                graft-versus-host disease (GVHD), acute and chronic GVHD,
                hepatic veno-occlusive disease after reduced intensity
                conditioning, and steroid-requiring febrile syndrome (without an
                identified infectious cause). These complications may occur
                despite intervening therapy between anti–PD-1/PD-L1 treatments
                and allogeneic HSCT. Follow patients closely for evidence of
                these complications and intervene promptly. Consider the benefit
                vs risks of using anti–PD-1/PD-L1 treatments prior to or after
                an allogeneic HSCT.
              </li>
            </ul>

            <h5>Increased Mortality in Patients With Multiple Myeloma</h5>
            <ul class="list">
              <li>
                In trials in patients with multiple myeloma, the addition of
                KEYTRUDA to a thalidomide analogue plus dexamethasone resulted
                in increased mortality. Treatment of these patients with an
                anti–PD-1/PD-L1 treatment in this combination is not recommended
                outside of controlled trials.
              </li>
            </ul>

            <h5>Embryofetal Toxicity</h5>
            <ul class="list">
              <li>
                Based on its mechanism of action, KEYTRUDA can cause fetal harm
                when administered to a pregnant woman. Advise women of this
                potential risk. In females of reproductive potential, verify
                pregnancy status prior to initiating KEYTRUDA and advise them to
                use effective contraception during treatment and for 4 months
                after the last dose.
              </li>
            </ul>

            <h5>Adverse Reactions</h5>
            <ul class="list">
              <li>
                In KEYNOTE-564, when KEYTRUDA was administered as a single agent
                for the adjuvant treatment of renal cell carcinoma, serious
                adverse reactions occurred in 20% of patients receiving
                KEYTRUDA; the serious adverse reactions (&ge;1%) were acute kidney
                injury, adrenal insufficiency, pneumonia, colitis, and diabetic
                ketoacidosis (1% each). Fatal adverse reactions occurred in 0.2%
                including 1 case of pneumonia. Discontinuation of KEYTRUDA due
                to adverse reactions occurred in 21% of 488 patients; the most
                common (&ge;1%) were increased alanine aminotransferase (ALT) (1.6%), colitis (1%), and
                adrenal insufficiency (1%). The most common adverse reactions
                (&ge;20%) were musculoskeletal pain (41%), fatigue (40%), rash
                (30%), diarrhea (27%), pruritus (23%), and hypothyroidism (21%).
              </li>
            </ul>

            <h5>Lactation</h5>
            <ul class="list">
              <li>
                Because of the potential for serious adverse reactions in
                breastfed children, advise women not to breastfeed during
                treatment and for 4 months after the last dose.
              </li>
            </ul>

            <p>
              <strong>Before prescribing KEYTRUDA, please read the accompanying
              <a href="https://www.merck.com/product/usa/pi_circulars/k/keytruda/keytruda_pi.pdf">Prescribing Information</a>. The  <a href="https://www.merck.com/product/usa/pi_circulars/k/keytruda/keytruda_mg.pdf">Medication Guide</a> also is available.</strong>
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Isi",
  components: {},
  props: {
    static: {
      type: Boolean,
      default: false,
    },
    hideElement: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      openedIsi: false,
    };
  },
  computed: {
    ...mapState([
      "userAgent",
      "urls",
      "mobileMenuState",
      "activeSection",
      "mainMenu",
    ]),
  },
  methods: {
    toggleISI() {
      this.openedIsi = !this.openedIsi;
      document.querySelector("html").style.overflow = this.openedIsi
        ? "hidden"
        : "visible";
    },
  },
};
</script>
<style lang="scss" src="./Isi.scss"></style>
