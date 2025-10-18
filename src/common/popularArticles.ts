import imgPrince from "../assets/images/Prince Andrew Gives Up Royal Titles in Fallout from Epstein Scandal.webp"
import imgnoKing from "../assets/images/Global 'No Kings' Protests Sweep US Cities Against Trump Administration Policies.webp"
import imgTrump from "../assets/images/rump Waffles on Tomahawk Missiles for Ukraine After Putin Phone Call.webp"
import imgOpenAI from "../assets/images/OpenAI Blocks Sora Users from Generating Videos of MLK Jr. Likeness.webp"
import imgFord from "../assets/images/Ford Recalls 740,000 Vehicles Over Critical Camera Display and Seatbelt Issues.webp"
import imgIsrael from "../assets/images/Israel Violates Ceasefire, Kills 11 in Gaza's Deadliest Truce Breach.webp"
import imgBlood from "../assets/images/New Blood Test for Over 50 Cancers 'Could Transform Outcomes.webp"

export type PopularProps = {
  title: string;
  image: ImageMetadata; 
  description: string;
  content:string,
  slug: string; 
}

export const Newspopular: PopularProps[] = [
  {
    title: "Prince Andrew Gives Up Royal Titles in Fallout from Epstein Scandal",
    image: imgPrince,
    description: "Buckingham Palace confirmed Friday that Britain's Prince Andrew will no longer use his royal titles following intense scrutiny over his connection to the late financier Jeffrey Epstein.",
    content: "The decision comes after years of public pressure and legal challenges following the Duke of York's association with convicted sex offender Jeffrey Epstein. While the move is intended to distance the monarchy from the scandal, critics argue that the King should go further by formally stripping him of his Dukedom titles.Andrew's diminishing role reflects the firm stance taken by the palace to protect the image of the Crown. The statement emphasized that the Prince will not be conducting public duties and will now live as a private citizen, though his full status and financial arrangements within the wider family remain a subject of intense public speculation and debate.",
    slug: "prince-andrew-gives-up-royal-titles",
  },
  {
    title: "Global 'No Kings' Protests Sweep US Cities Against Trump Administration Policies",
    image: imgnoKing,
    description: "Millions are expected to march across major U.S. cities today in 'No Kings' protests, challenging what organizers describe as the current administration's increasingly authoritarian measures.",
    content: "The nationwide demonstrations, organized under the banner of 'No Kings,' kicked off early in New York and Atlanta, with major rallies planned in Washington D.C. and other state capitals. Protesters are voicing opposition to recent executive actions, including cuts to federal departments and the controversial deployment of National Guard troops in Illinois, which critics view as an overreach of presidential power.Leading Democratic figures have lent their support to the movement, with Senator Bernie Sanders headlining the primary rally in D.C. The protests represent a significant surge in political activism, with organizers emphasizing a commitment to non-violent resistance and democratic principles in the face of perceived threats to civil liberties.",
    slug: "global-no-kings-protests-us",
  },
  {
    title: "Trump Waffles on Tomahawk Missiles for Ukraine After Putin Phone Call",
    image: imgTrump,
    description: "President Trump met with Ukrainian President Zelenskyy at the White House but appeared hesitant to provide long-range Tomahawk missiles, just hours after speaking with Russian President Putin.",
    content: "Zelenskyy’s primary objective for his White House visit was securing a pledge for Tomahawk cruise missiles, which Kyiv believes are essential for targeting Russian infrastructure and bolstering its negotiating position. However, after a seemingly amicable phone call with Vladimir Putin, President Trump expressed caution, stating that providing such advanced weaponry 'could mean a big escalation' and 'a lot of bad things could happen.' This shift in tone has alarmed US allies and confounded MAGA Republicans who advocate for a 'peace through strength' foreign policy that supports Ukraine. Analysts suggest that Putin may have effectively 'played' the US President, delaying a decision on the critical weapons package and forcing Zelenskyy to leave Washington without the key military assurance he sought.",
    slug: "trump-tomahawk-missiles-ukraine",
  },
  {
    title: "OpenAI Blocks Sora Users from Generating Videos of MLK Jr. Likeness",
    image: imgOpenAI,
    description: "OpenAI has paused the ability for Sora 2 users to create AI videos depicting Martin Luther King Jr., citing the need to establish clear rules for the use of historical figures.",
    content: "The company's decision stems from the complex ethical and legal gray areas surrounding the use of AI to generate deepfakes or likenesses of deceased public figures, especially those central to American history. OpenAI indicated it is actively working on comprehensive guidelines to manage copyrighted material and the visual identities of historical personalities before lifting the restriction.This move highlights the ongoing struggle for tech companies to balance the creative potential of advanced generative AI tools like Sora with the necessity of preventing misuse and maintaining respect for public memory. The pause is temporary while OpenAI's safety and legal teams finalize a policy that addresses potential ideological manipulation or defamation.",
    slug: "openai-sora-mlk-likeness-blocked",
  },
  {
    title: "Ford Recalls 740,000 Vehicles Over Critical Camera Display and Seatbelt Issues",
    image: imgFord,
    description: "Ford Motor Company announced a major recall affecting hundreds of thousands of trucks and SUVs due to faults in the rearview camera displays and potential seatbelt malfunctions.",
    content: "The recall, impacting approximately 740,000 vehicles, covers several popular models from recent years. The primary safety concern involves faulty connections in the rearview camera system, which can cause the display to intermittently fail, increasing the risk of an accident when reversing. The secondary issue relates to specific seatbelt components that may not adequately restrain occupants in the event of a crash.Ford has stated it will notify affected owners immediately and that authorized dealerships will perform the necessary repairs free of charge. The company is under increasing pressure to address quality control issues as this latest recall contributes to a mounting tally of safety-related service actions for the automotive giant in the past year.",
    slug: "ford-recalls-740000-vehicles",
  },
  {
    title: "Israel Violates Ceasefire, Kills 11 in Gaza's Deadliest Truce Breach",
    image: imgIsrael,
    description: "The Gaza media office reported that Israeli forces violated the current ceasefire agreement multiple times, with one strike killing 11 members of a single Palestinian family.",
    content: "The alleged violation marks the deadliest single incident since the humanitarian truce was put into effect, with authorities in Gaza urging the UN to immediately intervene to protect the civilian population. Testimonies from released Palestinian detainees and the handling of returned bodies have also brought to light alleged abuses within Israeli prisons, further straining the fragile agreement.Diplomatic efforts to stabilize the region have been complicated by the incident, with Egypt expected to lead a global stabilization force if the truce holds. However, the repeated breaches raise serious doubts about the long-term viability of the current ceasefire and the potential for a wider conflict to resume.",
    slug: "israel-ceasefire-breach-gaza",
  },
  {
    title: "New Blood Test for Over 50 Cancers 'Could Transform Outcomes'",
    image: imgBlood,
    description: "Scientists have hailed a 'game-changing' new blood test that can detect more than 50 types of cancer, potentially leading to earlier diagnosis and dramatically improved survival rates.",
    content: "The groundbreaking diagnostic tool uses advanced genomic sequencing to look for tiny fragments of cancerous DNA that are shed into the bloodstream, making it a powerful screening method for cancers that are currently hard to detect early. Health officials and researchers believe that widespread adoption of the test could lead to a significant drop in cancer mortality rates globally, particularly for pancreatic and ovarian cancers.The development is currently being fast-tracked for regulatory approval after successful large-scale clinical trials demonstrated high accuracy and minimal false-positive results. Experts suggest the test could initially be offered to high-risk groups before potentially becoming a routine part of annual health checks for the general population within the next five years.",
    slug: "new-blood-test-50-cancers-breakthrough",
  },
];