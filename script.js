let isSpanish = false;

const copy = {
  en: {
    pageTitle: "Energy Savings Program",
    navTag: "California Home Energy Support",
    heroTag: "For California homeowners",
    headline: "Stop Overpaying for Energy in California",
    subtext:
      "See if you qualify for programs that can save you money and help protect your home during outages.",
    ctaText: "Check If We Can Help You",
    heroNote:
      "No pressure. Just a quick eligibility check based on your home and usage.",
    cardLabel: "Why homeowners reach out",
    statOneNumber: "Rising bills",
    statOneText: "Many households are seeing utility costs climb year after year.",
    statTwoNumber: "Grid stress",
    statTwoText: "Blackouts and shutoffs can disrupt comfort, work, and safety.",
    statThreeNumber: "Less control",
    statThreeText: "Homeowners want more predictability and less dependence on rate hikes.",
    switchTag: "Why homeowners are switching",
    switchTitle: "Why Homeowners Are Switching",
    reasonOne: "Rising PG&E electricity rates every year",
    reasonTwo: "Frequent blackouts across California",
    reasonThree: "No control over your monthly bill",
    visualTag: "What people are seeing",
    visualTitle: "The pressure is visible across the grid.",
    visualIntro:
      "Higher demand, outage anxiety, and AI infrastructure growth are making energy feel like a daily concern instead of a background utility.",
    visualOneLabel: "Outages and blackouts",
    visualOneText:
      "More homeowners are looking for backup, predictability, and less exposure to disruptions.",
    visualTwoLabel: "Grid pressure",
    visualTwoText:
      "California households are paying closer attention to where reliability and rates are heading.",
    visualThreeLabel: "AI and data center growth",
    visualThreeText:
      "New computing demand is becoming part of the energy conversation, especially in Central California.",
    articleTag: "Energy updates",
    articleTitle: "What's Happening Right Now",
    articleIntro:
      "Homeowners are paying closer attention because rate pressure, grid reliability, and backup planning are becoming harder to ignore.",
    articleOneSource: "American Experiment",
    articleOneDate: "DOE warning",
    articleOneTitle: "DOE Warning: AI Demand Could Raise Outage Risk",
    articleOneText:
      "New warnings point to AI-driven electricity demand as one factor that could put much more pressure on the power grid in the years ahead.",
    articleOneLink: "Read the article",
    articleTwoSource: "California Energy Commission",
    articleTwoDate: "SB 100",
    articleTwoTitle: "California's 2045 Renewable Energy Goal",
    articleTwoText:
      "California policy is pushing the state toward 100% clean retail electricity by 2045, shaping how homeowners think about future energy choices.",
    articleTwoLink: "Read the article",
    articleThreeSource: "Environmental Research Letters",
    articleThreeDate: "Data center demand",
    articleThreeTitle: "Data Centers Are Driving More Energy Demand",
    articleThreeText:
      "Research on data center growth highlights how digital infrastructure can add meaningful strain to regional electricity demand.",
    articleThreeLink: "Read the article",
    articleFourSource: "GV Wire",
    articleFourDate: "Fresno area",
    articleFourTitle: "Fresno Is Emerging as an AI Data Center Hotspot",
    articleFourText:
      "Reporting on PG&E activity suggests the Fresno area is seeing rising interest from AI-related data center projects and the energy demand that comes with them.",
    articleFourLink: "Read the article",
    articleFiveSource: "Fortune",
    articleFiveDate: "May 12, 2026",
    articleFiveTitle: "Lake Tahoe Residents Face a New Power Source Fight",
    articleFiveText:
      "Fortune reports that nearly 50,000 Lake Tahoe residents may need a new energy source as utility capacity is redirected toward data center demand.",
    articleFiveLink: "Read the article",
    articleSixSource: "U.S. Department of Energy",
    articleSixDate: "July 2026",
    articleSixTitle: "Federal Officials Take Emergency Action to Reduce Blackout Risk Across 17 States",
    articleSixText: "In July 2026, the U.S. Department of Energy issued an emergency order covering 17 states as extreme heat increased pressure on the electric grid. The order authorized additional generation and backup resources to help maintain reliability and reduce the risk of power outages.",
    articleSixLink: "Read the article",
    articleSevenSource: "Los Angeles Times",
    articleSevenDate: "August 29, 2026",
    articleSevenTitle: "California Moves to Protect Consumers as Data Centers Demand More Electricity",
    articleSevenText: "California lawmakers reached an agreement aimed at regulating the growing electricity demands of data centers amid concerns that new facilities could require costly grid upgrades and contribute to higher electricity costs for consumers.",
    articleSevenLink: "Read the article",
    articleEightSource: "Los Angeles Times",
    articleEightDate: "August 6, 2026",
    articleEightTitle: "AI's Growing Electricity Demand Is Creating New Challenges for America's Grid",
    articleEightText: "AI data centers can require enormous amounts of electricity and experience rapid changes in power demand. Energy experts are studying how these new loads could affect grid stability and reliability as AI infrastructure continues expanding.",
    articleEightLink: "Read the article",
    subsidyTag: "More ways to save",
    subsidyTitle: "You May Also Qualify",
    subsidyIntro: "Depending on your household and available programs, you may be eligible for subsidies that help with other energy-efficient home upgrades.",
    subsidyAcTitle: "AC Equipment",
    subsidyAcText: "Support may be available for qualifying heating and cooling equipment.",
    subsidyFridgeTitle: "Refrigerators",
    subsidyFridgeText: "Programs may help with eligible energy-efficient refrigerator upgrades.",
    subsidyOvenTitle: "Ovens",
    subsidyOvenText: "Qualifying households may receive help toward approved oven upgrades.",
    subsidyDishwasherTitle: "Dishwashers",
    subsidyDishwasherText: "Assistance may be available for eligible high-efficiency dishwashers.",
    subsidyRoofTitle: "Roof Improvements",
    subsidyRoofText: "Some programs may help cover qualifying improvements to your roof.",
    subsidyDisclaimer: "Eligibility, program availability, and benefit amounts vary by household, location, and program requirements.",
    testimonialTag: "Homeowner stories",
    testimonialOneStars: "5-star review",
    testimonialTwoStars: "5-star review",
    testimonialThreeStars: "5-star review",
    testimonialFourStars: "5-star review",
    testimonialTitle: "People want proof that this actually helps.",
    testimonialIntro:
      "These stories show the kind of concerns homeowners bring in and the confidence they want before making a change.",
    testimonialOneQuote:
      "\"Our bill kept jumping and we felt like we had zero control. The process was simple, and we finally understood what options were available for our home.\"",
    testimonialOneName: "Angela R., Fresno",
    testimonialOneResult: "Wanted lower monthly energy costs",
    testimonialTwoQuote:
      "\"After dealing with outage concerns every summer, we wanted more peace of mind. It helped to talk through what programs and protections might fit.\"",
    testimonialTwoName: "Marcus T., Sacramento",
    testimonialTwoResult: "Focused on backup and outage readiness",
    testimonialThreeQuote:
      "\"We had been putting it off because everything sounded confusing. This made the next step feel clear and much less overwhelming.\"",
    testimonialThreeName: "Elena M., Bakersfield",
    testimonialThreeResult: "Needed a clearer path to qualify",
    testimonialFourName: "Juan Vasquez, Selma",
    testimonialFourResult: "Qualified for batteries and subsidies",
    formTag: "Next step",
    formTitle: "Check If You Qualify",
    formText:
      "Share a few details and we'll help determine whether your home may qualify for available savings programs.",
    submitText: "Submit Information",
    fullName: { placeholder: "Full Name", ariaLabel: "Full Name" },
    phoneNumber: { placeholder: "Phone Number", ariaLabel: "Phone Number" },
    zipCode: { placeholder: "Zip Code", ariaLabel: "Zip Code" },
    homeownerPlaceholder: "Are you the homeowner?",
    homeownerYes: "Yes, I own my home",
    homeownerNo: "No",
    consentText: "I agree to be contacted by phone or text about my request. Consent is not a condition of purchase.",
    privacyLink: "Privacy Policy",
    footerText:
      "Not all homeowners qualify. Programs vary by location and electricity usage.",
    langButton: "Espanol",
    pageLanguage: "en"
  },
  es: {
    pageTitle: "Programa de Ahorro de Energia",
    navTag: "Apoyo energetico para hogares en California",
    heroTag: "Para propietarios de vivienda en California",
    headline: "Deja de pagar de mas por la energia en California",
    subtext:
      "Descubre si calificas para programas que pueden ayudarte a ahorrar dinero y proteger tu hogar durante apagones.",
    ctaText: "Verifica si podemos ayudarte",
    heroNote:
      "Sin presion. Solo una revision rapida segun tu hogar y tu consumo.",
    cardLabel: "Por que los propietarios nos contactan",
    statOneNumber: "Facturas mas altas",
    statOneText: "Muchos hogares estan viendo subir los costos de electricidad cada ano.",
    statTwoNumber: "Presion en la red",
    statTwoText: "Los apagones y cortes pueden afectar la comodidad, el trabajo y la seguridad.",
    statThreeNumber: "Menos control",
    statThreeText: "Los propietarios quieren mas estabilidad y menos dependencia de aumentos.",
    switchTag: "Por que mas propietarios estan cambiando",
    switchTitle: "Por Que Los Propietarios Estan Cambiando",
    reasonOne: "Las tarifas de PG&E siguen subiendo cada ano",
    reasonTwo: "Apagones frecuentes en California",
    reasonThree: "Poco control sobre la factura mensual",
    visualTag: "Lo que la gente esta viendo",
    visualTitle: "La presion ya se nota en toda la red.",
    visualIntro:
      "La mayor demanda, el miedo a apagones y el crecimiento de infraestructura de IA estan haciendo que la energia se sienta como una preocupacion diaria.",
    visualOneLabel: "Apagones y cortes",
    visualOneText:
      "Mas propietarios buscan respaldo, estabilidad y menos exposicion a interrupciones.",
    visualTwoLabel: "Presion sobre la red",
    visualTwoText:
      "Los hogares en California prestan mas atencion a hacia donde van la confiabilidad y las tarifas.",
    visualThreeLabel: "Crecimiento de IA y centros de datos",
    visualThreeText:
      "La nueva demanda de computo ya forma parte de la conversacion energetica, especialmente en California Central.",
    articleTag: "Actualizaciones de energia",
    articleTitle: "Lo Que Esta Pasando Ahora",
    articleIntro:
      "Los propietarios estan prestando mas atencion porque la presion en tarifas, la estabilidad de la red y la preparacion ante apagones ya no se pueden ignorar.",
    articleOneSource: "American Experiment",
    articleOneDate: "Alerta del DOE",
    articleOneTitle: "El DOE Advierte Que la Demanda de IA Puede Elevar el Riesgo",
    articleOneText:
      "Nuevas advertencias apuntan a que la demanda electrica impulsada por la IA podria aumentar mucho la presion sobre la red.",
    articleOneLink: "Leer el articulo",
    articleTwoSource: "Comision de Energia de California",
    articleTwoDate: "SB 100",
    articleTwoTitle: "La Meta de Energia Renovable para 2045 en California",
    articleTwoText:
      "La politica estatal impulsa a California hacia electricidad limpia al 100% para 2045, algo que influye en las decisiones de energia del hogar.",
    articleTwoLink: "Leer el articulo",
    articleThreeSource: "Environmental Research Letters",
    articleThreeDate: "Demanda de centros de datos",
    articleThreeTitle: "Los Centros de Datos Estan Elevando la Demanda de Energia",
    articleThreeText:
      "La investigacion sobre el crecimiento de centros de datos muestra como la infraestructura digital puede aumentar la demanda regional de electricidad.",
    articleThreeLink: "Leer el articulo",
    articleFourSource: "GV Wire",
    articleFourDate: "Area de Fresno",
    articleFourTitle: "Fresno Esta Surgiendo Como Punto Clave para Centros de Datos de IA",
    articleFourText:
      "Reportes sobre PG&E sugieren que el area de Fresno esta viendo mas interes de proyectos de centros de datos relacionados con IA.",
    articleFourLink: "Leer el articulo",
    articleFiveSource: "Fortune",
    articleFiveDate: "12 de mayo de 2026",
    articleFiveTitle: "Lake Tahoe Enfrenta una Nueva Lucha por su Fuente de Energia",
    articleFiveText:
      "Fortune informa que casi 50,000 residentes de Lake Tahoe podrian necesitar una nueva fuente de energia mientras capacidad electrica se redirige hacia centros de datos.",
    articleFiveLink: "Leer el articulo",
    articleSixSource: "Departamento de Energia de EE. UU.",
    articleSixDate: "Julio de 2026",
    articleSixTitle: "Funcionarios Federales Toman Medidas de Emergencia para Reducir el Riesgo de Apagones en 17 Estados",
    articleSixText: "En julio de 2026, el Departamento de Energia de Estados Unidos emitio una orden de emergencia para 17 estados mientras el calor extremo aumentaba la presion sobre la red electrica. La orden autorizo generacion adicional y recursos de respaldo para mantener la confiabilidad y reducir el riesgo de apagones.",
    articleSixLink: "Leer el articulo",
    articleSevenSource: "Los Angeles Times",
    articleSevenDate: "29 de agosto de 2026",
    articleSevenTitle: "California Busca Proteger a los Consumidores Mientras los Centros de Datos Demandan Mas Electricidad",
    articleSevenText: "Legisladores de California llegaron a un acuerdo para regular la creciente demanda electrica de los centros de datos, ante inquietudes de que nuevas instalaciones puedan requerir costosas mejoras a la red y elevar los costos de electricidad para consumidores.",
    articleSevenLink: "Leer el articulo",
    articleEightSource: "Los Angeles Times",
    articleEightDate: "6 de agosto de 2026",
    articleEightTitle: "La Creciente Demanda Electrica de la IA Crea Nuevos Retos para la Red de Estados Unidos",
    articleEightText: "Los centros de datos de IA pueden requerir enormes cantidades de electricidad y experimentar cambios rapidos en la demanda. Expertos estudian como estas nuevas cargas pueden afectar la estabilidad y confiabilidad de la red.",
    articleEightLink: "Leer el articulo",
    subsidyTag: "Mas formas de ahorrar",
    subsidyTitle: "Tambien Podrias Calificar",
    subsidyIntro: "Segun tu hogar y los programas disponibles, podrias calificar para subsidios que ayudan con otras mejoras de eficiencia energetica.",
    subsidyAcTitle: "Equipos de aire acondicionado",
    subsidyAcText: "Podria haber apoyo disponible para equipos elegibles de calefaccion y aire acondicionado.",
    subsidyFridgeTitle: "Refrigeradores",
    subsidyFridgeText: "Algunos programas pueden ayudar con refrigeradores elegibles de alta eficiencia.",
    subsidyOvenTitle: "Hornos",
    subsidyOvenText: "Los hogares que califican podrian recibir ayuda para mejoras de hornos aprobadas.",
    subsidyDishwasherTitle: "Lavavajillas",
    subsidyDishwasherText: "Podria haber asistencia para lavavajillas elegibles de alta eficiencia.",
    subsidyRoofTitle: "Mejoras del techo",
    subsidyRoofText: "Algunos programas pueden ayudar a cubrir mejoras elegibles para el techo de tu hogar.",
    subsidyDisclaimer: "La elegibilidad, la disponibilidad de los programas y los montos de los beneficios varian segun el hogar, la ubicacion y los requisitos del programa.",
    testimonialTag: "Historias de propietarios",
    testimonialOneStars: "Resena de 5 estrellas",
    testimonialTwoStars: "Resena de 5 estrellas",
    testimonialThreeStars: "Resena de 5 estrellas",
    testimonialFourStars: "Resena de 5 estrellas",
    testimonialTitle: "La gente quiere pruebas de que esto si ayuda.",
    testimonialIntro:
      "Estas historias reflejan las preocupaciones reales de propietarios que buscaban mas claridad y tranquilidad.",
    testimonialOneQuote:
      "\"Nuestra factura seguia subiendo y sentiamos que no teniamos control. El proceso fue sencillo y por fin entendimos que opciones habia para nuestro hogar.\"",
    testimonialOneName: "Angela R., Fresno",
    testimonialOneResult: "Queria bajar sus costos mensuales",
    testimonialTwoQuote:
      "\"Despues de preocuparnos por los apagones cada verano, buscabamos mas tranquilidad. Fue util entender que programas y protecciones podrian aplicar.\"",
    testimonialTwoName: "Marcus T., Sacramento",
    testimonialTwoResult: "Buscaba prepararse mejor para apagones",
    testimonialThreeQuote:
      "\"Lo habiamos pospuesto porque todo parecia confuso. Esto hizo que el siguiente paso se sintiera mucho mas claro y manejable.\"",
    testimonialThreeName: "Elena M., Bakersfield",
    testimonialThreeResult: "Necesitaba una ruta mas clara para calificar",
    testimonialFourQuote:
      "\"Al principio tenia una mala experiencia pagando una factura de ajuste de alrededor de $1,000. Me inscrebi en el programa y califique para las baterias y $300 en subsidios para mi nueva refrigeradora. Ahora estoy satisfecho y protegido contra apagones\"",
    testimonialFourName: "Juan Vasquez, Selma",
    testimonialFourResult: "Califico para baterias y subsidios",
    formTag: "Siguiente paso",
    formTitle: "Consulta Si Calificas",
    formText:
      "Comparte algunos datos y te ayudaremos a revisar si tu hogar podria calificar para programas de ahorro.",
    submitText: "Enviar informacion",
    fullName: { placeholder: "Nombre completo", ariaLabel: "Nombre completo" },
    phoneNumber: { placeholder: "Numero de telefono", ariaLabel: "Numero de telefono" },
    zipCode: { placeholder: "Codigo postal", ariaLabel: "Codigo postal" },
    homeownerPlaceholder: "Eres el propietario de la vivienda?",
    homeownerYes: "Si, soy propietario de mi vivienda",
    homeownerNo: "No",
    consentText: "Acepto que me contacten por telefono o mensaje de texto sobre mi solicitud. El consentimiento no es una condicion de compra.",
    privacyLink: "Politica de privacidad",
    footerText:
      "No todos los propietarios califican. Los programas varian segun la ubicacion y el consumo electrico.",
    langButton: "English",
    pageLanguage: "es"
  }
};

function applyCopy(languageKey) {
  const selected = copy[languageKey];

  Object.entries(selected).forEach(([id, value]) => {
    if (id === "pageLanguage") {
      document.documentElement.lang = value;
      return;
    }

    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    if (typeof value === "object") {
      if (value.placeholder) {
        element.placeholder = value.placeholder;
      }
      if (value.ariaLabel) {
        element.setAttribute("aria-label", value.ariaLabel);
      }
      return;
    }

    element.textContent = value;
  });
}

function toggleLanguage() {
  isSpanish = !isSpanish;
  applyCopy(isSpanish ? "es" : "en");
}

const leadForm = document.querySelector(".lead-form");

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const submitButton = leadForm.querySelector("button");
  if (!submitButton) {
    return;
  }

  const original = submitButton.textContent;
  submitButton.textContent = isSpanish ? "Recibido" : "Received";
  submitButton.disabled = true;

  window.setTimeout(() => {
    leadForm.reset();
    submitButton.textContent = original;
    submitButton.disabled = false;
  }, 1800);
});

applyCopy("en");
