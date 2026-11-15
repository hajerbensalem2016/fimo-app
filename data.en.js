/* Contenu en ANGLAIS (traduction de data.js ; même structure, mêmes ids, même ordre des questions et des choix). Généré à partir de data.js : pour ajouter une leçon, l'ajouter dans data.js puis sa traduction ici. */
const LESSONS_EN_1 = [
  {
    id: "l1", icon: "⏱️", title: "EU driving time rules: driving time and breaks",
    summary: "Aims of the EU driving time rules (Regulation (EC) 561/2006), who they apply to, continuous, daily, weekly and two-week driving, breaks.",
    sources: "photos: “Compliance with the regulations” sheet, “EU driving time rules (561/2006)” sheet, driving time rules assessment, application exercise no. 4, 561/2006 multiple-choice quiz, Kahoot. Checked against Regulation (EC) 561/2006.",
    content: `
<h3>The 3 aims of the EU driving time rules (Regulation (EC) 561/2006)</h3>
<ul><li>Improve <b>road safety</b>;</li><li>improve <b>working conditions</b>;</li><li>harmonise <b>competition</b> rules between European countries.</li></ul>
<p>Text: Regulation (EC) No <b>561/2006</b>, in force since <b>2007</b>.</p>
<h3>Who do they apply to?</h3>
<ul><li>Goods transport by vehicles over <b>3.5 t</b>, <b>public and private</b> transport, <b>employed and self-employed</b> drivers, whatever the country of registration, throughout the European Union.</li>
<li>Exempt: army, police and fire service vehicles, breakdown vehicles within <b>100 km</b> of their base, vehicles travelling at under 40 km/h, driving-school vehicles.</li></ul>
<h3>Driving times</h3>
<table><tr><th>Rule</th><th>Duration</th></tr>
<tr><td>Maximum continuous driving</td><td><b>4 h 30</b></td></tr>
<tr><td>Break after 4 h 30</td><td><b>45 min</b> in one block, or split: <b>15 min then 30 min</b> (in that order)</td></tr>
<tr><td>Stop counted as a break</td><td>From <b>15 min</b> (a shorter stop does not count)</td></tr>
<tr><td>Normal daily driving</td><td><b>9 h</b></td></tr>
<tr><td>Extended daily driving</td><td><b>10 h</b>, at most <b>twice a week</b></td></tr>
<tr><td>Weekly driving</td><td><b>56 h</b></td></tr>
<tr><td>Driving over two consecutive weeks</td><td><b>90 h</b></td></tr></table>
<ul><li><b>Waiting times</b> are not driving breaks.</li>
<li>During the break, <b>no work at all</b>: no securing or tidying the load.</li>
<li>The <b>EU rules week</b> starts on <b>Monday at 0:00</b> and ends on <b>Sunday at 24:00</b>.</li>
<li>The 90 h rule: after 45 h of driving one week, 45 h remain for the next; after 56 h, 34 h remain.</li>
<li>Example of an infringement: 2 h of work, 4 h 30 of driving, 1 h of rest, then 2 h 30 of driving = compliant; but 4 h of driving + 1 h of work + 2 h of driving with no break = 6 h of continuous driving, an infringement.</li></ul>
<h3>Derogations (Art. 12, since 20 August 2020)</h3>
<ul><li>To reach home or the company's base in order to take a weekly rest: the daily and weekly driving limits may be exceeded by <b>1 h</b>; or by <b>2 h</b> for a <b>regular</b> weekly rest, after an uninterrupted <b>30 min</b> break.</li>
<li>Pay based on distance travelled or volume carried: <b>prohibited</b> if it endangers road safety.</li></ul>
<div class="key">Memo: 4 h 30 → 45 min (15 + 30) · 9 h (10 h × 2/week) · 56 h/week · 90 h/2 weeks · week = Monday 0:00 → Sunday 24:00.</div>`,
    quiz: [
      { q: "What is the maximum continuous driving time?", c: ["4 h 30", "4 h", "9 h", "5 h"], a: 0, e: "After 4 h 30, a 45 min break is compulsory." },
      { q: "After 4 h 30 of continuous driving, the minimum break is:", c: ["45 min in one go, or 15 min then 30 min", "30 min", "45 min in two parts: 30 min then 15 min", "1 hour"], a: 0, e: "The split must be 15 min THEN 30 min." },
      { q: "Which split of the break complies with the EU driving time rules?", c: ["15 min + 30 min", "30 min + 15 min", "20 min + 25 min", "10 min + 35 min"], a: 0, e: "The first part at least 15 min, the second at least 30 min." },
      { q: "As a general rule, the maximum daily driving time is:", c: ["9 h", "10 h", "8 h", "11 h"], a: 0, e: "9 h, extendable to 10 h twice a week." },
      { q: "By derogation, the maximum daily driving time is:", c: ["10 h", "11 h", "12 h", "9 h"], a: 0, e: "10 h, at most twice a week." },
      { q: "How many days a week may you drive 10 hours?", c: ["2", "1", "3", "4"], a: 0, e: "Twice a week." },
      { q: "The maximum driving permitted in one week is:", c: ["56 h", "45 h", "50 h", "60 h"], a: 0, e: "56 hours." },
      { q: "The maximum driving time over two consecutive weeks is:", c: ["90 h", "112 h", "45 h", "36 h"], a: 0, e: "90 hours." },
      { q: "A driver drove 45 h in one week. The following week, they may drive at most:", c: ["45 h", "56 h", "35 h", "90 h"], a: 0, e: "90 − 45 = 45 h." },
      { q: "When does the regulatory working week start?", c: ["Monday 0:00", "Sunday 24:00", "Sunday 22:00", "Monday 6:00"], a: 0, e: "Monday 0:00." },
      { q: "When does the regulatory working week end?", c: ["Sunday 24:00", "Monday 0:00", "Saturday 24:00", "Friday 20:00"], a: 0, e: "Sunday 24:00." },
      { q: "What is the minimum length of a stop for it to count as a driving break?", c: ["15 minutes", "30 minutes", "45 minutes", "4 h 30"], a: 0, e: "From 15 min (the student ticked 4 h 30 on the assessment: wrong)." },
      { q: "Are waiting times considered a driving break?", c: ["No", "Yes", "Yes if over 15 min", "Yes if the vehicle is stationary"], a: 0, e: "Waiting is availability or work." },
      { q: "During a driving break, may you secure or tidy the load?", c: ["No", "Yes if under 15 min", "Yes if the vehicle is stationary", "Yes in a two-driver crew"], a: 0, e: "No work during the break." },
      { q: "Regulation 561/2006 applies to goods vehicles of more than:", c: ["3.5 t", "7.5 t", "12 t", "19 t"], a: 0, e: "More than 3.5 tonnes." },
      { q: "The people covered by the EU driving time rules are:", c: ["Public and private transport", "Public transport only", "Private transport only", "Employees only"], a: 0, e: "Public and private, employed and self-employed." },
      { q: "Which vehicle is NOT subject to the EU driving time rules?", c: ["A breakdown vehicle operating within 100 km of its base", "A 19 t rigid truck", "A 26 t vehicle", "A 7.5 t vehicle used for own-account transport"], a: 0, e: "Breakdown vehicles within 100 km, army, fire service, police." },
      { q: "What is the aim of the EU driving time rules?", c: ["Improve working conditions and road safety, avoid unfair competition", "Apply only in France", "Increase driving times", "Replace the highway code"], a: 0, e: "The three aims of the EU driving time rules." },
      { q: "The EU driving time rules:", c: ["Strengthen road safety", "Serve no purpose", "Concern only international transport", "Replace the labour code"], a: 0, e: 'The EU driving time rules limit driving time and impose breaks and rest periods: rested drivers mean fewer accidents. That is their first aim, together with better working conditions and fair competition.' },
      { q: "A driver drives 9 h 30 in a day. To comply, they must have taken at least:", c: ["Two regulation breaks (45 min each, or 15 + 30 min each)", "A single 45 min break", "A 30 min break", "No break in a two-driver crew"], a: 0, e: "9 h 30 is more than two periods of 4 h 30." },
      { q: "To reach home and take a regular weekly rest, a driver may exceed daily driving by:", c: ["2 h, after an uninterrupted 30 min break", "1 h with no condition", "3 h", "No overrun is possible"], a: 0, e: "Article 12 derogation (1 h, or 2 h with a 30 min break for a regular rest)." },
      { q: "Regulation 561/2006 has been in force since:", c: ["2007", "2004", "2005", "2010"], a: 0, e: "Adopted in 2006, applicable from April 2007." },
      { q: "Paying a driver according to distance travelled or volume carried:", c: ["Is prohibited if it endangers road safety", "Is always allowed", "Is compulsory", "Is allowed only in international transport"], a: 0, e: "Article 10 of Regulation 561/2006." },
      { q: "Which sequence is an infringement?", c: ["2 h work, 4 h driving, 1 h work, 2 h driving, 1 h rest", "2 h work, 4 h 30 driving, 1 h rest, 2 h 30 driving", "4 h 30 driving, 45 min rest, 4 h 30 driving", "2 h driving, 45 min rest, 4 h driving"], a: 0, e: "Work does not interrupt driving: 4 h + 2 h = 6 h of continuous driving." }
    ]
  },
  {
    id: "l2", icon: "🛏️", title: "EU driving time rules: daily rest, weekly rest, two-driver crews, ferry",
    summary: "Regular, reduced and split daily rest; weekly rest and compensation; two-driver crews; ferry and train; spread-over.",
    sources: "photos: “EU driving time rules” sheet, “Compliance with the regulations” sheet, driving time rules assessment, 561/2006 multiple-choice quiz, C2a summary assessment, Kahoot. Checked against Regulation 561/2006.",
    content: `
<h3>Daily rest (within 24 h of the end of the previous rest)</h3>
<table><tr><th>Type</th><th>Duration</th><th>Condition</th></tr>
<tr><td>Regular</td><td><b>11 h</b> consecutive</td><td>General rule</td></tr>
<tr><td>Reduced</td><td><b>9 h</b> minimum (less than 11 h)</td><td>At most <b>3 times</b> between two weekly rests</td></tr>
<tr><td>Split</td><td><b>3 h + 9 h</b> = 12 h</td><td>First period at least 3 h, second at least 9 h; not every day</td></tr>
<tr><td>Two-driver crew</td><td><b>9 h</b> within <b>30 h</b></td><td>Vehicle stationary; the bunk while the vehicle is moving is not rest</td></tr></table>
<p><b>Spread-over (shift span)</b> of the day (start of work → end of work): at most <b>13 h</b> with a regular 11 h rest, <b>15 h</b> with a reduced 9 h rest (24 h − rest).</p>
<h3>Weekly rest</h3>
<ul><li>Starts at the latest at the end of <b>6 periods of 24 h</b> after the previous weekly rest: a week = <b>6 daily periods</b> at most.</li>
<li><b>Regular: 45 h</b>. <b>Reduced: 24 h</b> minimum.</li>
<li>Over two consecutive weeks: two regular rests, or one regular and one reduced. Two consecutive reduced rests: <b>prohibited</b> as a general rule (derogation in international transport outside the country of establishment, with 4 weekly rests over 4 weeks including 2 regular ones).</li>
<li>The reduction (e.g. 45 − 24 = 21 h) is <b>made up in one block before the end of the 3rd following week</b>, attached to a rest of at least <b>9 h</b>.</li></ul>
<h3>Ferry / train</h3>
<p>A regular daily rest or reduced weekly rest taken on board a ferry or train may be interrupted <b>at most 2 times</b>, for a total of <b>1 h</b>, if the driver has a <b>bunk</b>. Without a bunk: availability.</p>
<h3>Two-driver crew</h3>
<ul><li>Each driver: 2 × 4 h 30 of driving over a <b>30 h</b> period; the vehicle must be stationary for at least <b>9 h</b>.</li>
<li>The passenger is on <b>availability</b>. Since 20 August 2020, the 45 min break may be taken in the vehicle driven by the colleague, provided the driver is not assisted.</li></ul>
<div class="key">Memo: 11 h (reduced 9 h × 3) · split 3 + 9 · 45 h (reduced 24 h, make up before the end of the 3rd week) · weekly rest after 6 × 24 h · two-driver crew 9 h within 30 h.</div>`,
    quiz: [
      { q: "As a general rule, the length of daily rest is:", c: ["11 h", "9 h", "8 h", "10 h"], a: 0, e: "11 consecutive hours (the student answered 9 h on the C2a assessment: wrong)." },
      { q: "What is the minimum length of a reduced daily rest?", c: ["9 h", "8 h", "10 h", "11 h"], a: 0, e: "At least 9 h, but less than 11 h." },
      { q: "How many reduced daily rests at most between two weekly rests?", c: ["3", "1", "2", "4"], a: 0, e: "Three." },
      { q: "A regular split daily rest consists of:", c: ["At least 3 h then at least 9 h", "9 h then 3 h", "2 h then 9 h", "4 h then 8 h"], a: 0, e: "Total 12 h, first period at least 3 h." },
      { q: "Can a split daily rest be taken every day?", c: ["No", "Yes", "Yes in a two-driver crew", "Yes in international transport"], a: 0, e: "Question from the 561/2006 multiple-choice quiz." },
      { q: "In a two-driver crew, the daily rest is:", c: ["9 h minimum within 30 h", "11 h minimum within 24 h", "9 h within 24 h", "11 h within 30 h"], a: 0, e: "9 h within a 30 h period, vehicle stationary." },
      { q: "In a two-driver crew, does time spent in the bunk while the vehicle is moving count as rest?", c: ["No", "Yes", "Yes if over 3 h", "Yes at night"], a: 0, e: "Rest requires the vehicle to be stationary." },
      { q: "May you take your rest in the bunk when the vehicle is stationary?", c: ["Yes", "No", "Only in a two-driver crew", "Only in a paid rest area"], a: 0, e: "Daily rest in the cab while stationary: yes (not the regular weekly rest)." },
      { q: "A weekly rest must start at the latest after:", c: ["6 periods of 24 h", "5 periods of 24 h", "7 periods of 24 h", "4 periods of 24 h"], a: 0, e: "Six periods of 24 h." },
      { q: "A road haulage driver's week is made up of:", c: ["6 daily periods maximum", "5 daily periods maximum", "7 daily periods maximum", "4 daily periods maximum"], a: 0, e: 'The weekly rest must start at the latest after 6 periods of 24 h: you cannot string together more than 6 working days before taking your weekly rest.' },
      { q: "What is the length of a regular weekly rest?", c: ["45 h", "24 h", "36 h", "90 h"], a: 0, e: "45 hours." },
      { q: "What is the minimum length of a reduced weekly rest?", c: ["24 h", "35 h", "45 h", "12 h"], a: 0, e: "24 hours." },
      { q: "A reduced weekly rest must be made up:", c: ["In one block before the end of the 3rd following week, attached to a rest of at least 9 h", "Only the following week", "Within 2 weeks, in instalments", "Never"], a: 0, e: "Compensation in one go before the end of the third week." },
      { q: "As a general rule, can you take two consecutive reduced weekly rests?", c: ["No", "Yes", "Yes if made up the following week", "Yes in a two-driver crew"], a: 0, e: "Derogation only in international transport outside the country of establishment (4 rests over 4 weeks including 2 regular ones)." },
      { q: "For a road haulage driver, a daily period:", c: ["Is a 24 h period between two rests", "Starts at 0:00 and ends at 24:00", "Starts at sunrise", "Lasts 9 h"], a: 0, e: 'The driver’s “day” is not the calendar day (0:00–24:00): it is a 24-hour period that starts at the end of the previous rest. Driving, other work and a daily rest (11 h, or 9 h reduced) must all fit into those 24 hours.' },
      { q: "What is the maximum spread-over in 24 h with a reduced 9 h daily rest?", c: ["15 h", "13 h 30", "14 h", "17 h"], a: 0, e: "24 h − 9 h = 15 h (13 h with a regular 11 h rest)." },
      { q: "On board a ferry, the regular daily rest may be interrupted:", c: ["At most 2 times, 1 h in total, with a bunk", "As many times as necessary", "Never", "At most once, for 2 h"], a: 0, e: "Rule: 2 interruptions / 1 h / bunk." },
      { img: IMG.symboles, q: "On a ferry for 4 h without a bunk, the driver selects:", c: ["Availability", "Rest", "Other work", "Driving"], a: 0, e: "Without a bunk, no rest is possible." },
      { q: "A driver accompanying their vehicle on a ferry must have, for a regular daily rest:", c: ["A bunk or cabin", "A seat", "Nothing in particular", "A meal"], a: 0, e: "Question from the 561/2006 multiple-choice quiz." },
      { q: "End of work at 19:30. The next day, with a reduced rest, the earliest start of work is:", c: ["4:30", "6:30", "2:30", "7:30"], a: 0, e: "19:30 + 9 h = 4:30 (6:30 with a regular rest)." },
      { q: "End of work at 21:00, restart at 6:00. The daily rest is:", c: ["Sufficient: 9 h = reduced rest", "Insufficient", "Sufficient: 11 h", "Valid only in a two-driver crew"], a: 0, e: "21:00 → 6:00 = 9 h." },
      { q: "In a two-driver crew, each driver may drive over a 30 h period:", c: ["2 × 4 h 30", "3 × 4 h 30", "1 × 9 h with no break", "10 h at a stretch"], a: 0, e: "Total 18 h of driving for the crew, vehicle stationary for at least 9 h." },
      { q: "Since 20 August 2020, in a two-driver crew, the 45 min break may be taken in the vehicle driven by the colleague:", c: ["True, provided the driver is not assisted", "False", "True only at night", "True only on motorways"], a: 0, e: "Question from the 561/2006 multiple-choice quiz." }
    ]
  },
  {
    id: "l3", icon: "📟", title: "Tachograph, driver card, checks and penalties",
    summary: "Activities and symbols, driver card, reading the printout, UTC time, obligations, checks, infringements and offences.",
    sources: "photos: driving time rules assessment (tachograph), “tachograph printout” assessment, C2a summary assessment, application exercise no. 4, Kahoot. Checked against Regulation (EU) 165/2014 and the French transport code.",
    content: `
<h3>The tachograph</h3>
<ul><li>Compulsory on goods vehicles over <b>3.5 t</b> and passenger vehicles with more than <b>9 seats</b>.</li>
<li>Inspection by an approved installer: <b>every 2 years</b> (the student ticked 1 year: wrong).</li>
<li>It records in <b>UTC</b> time: in France, add 1 h in winter and 2 h in summer (e.g. a printout showing 02:41 UTC in September = 04:41 French time).</li>
<li>With a chart: check that it is <b>compatible</b> with the device; a change of vehicle during the day appears on the same chart.</li></ul>
<h3>The 4 activities</h3>
<table><tr><th>Symbol</th><th>Activity</th><th>Examples from the exercises</th></tr>
<tr><td>🛞 steering wheel</td><td><b>Driving</b></td><td>Time spent at the wheel</td></tr>
<tr><td>⚒ crossed hammers</td><td><b>Other work</b></td><td>Loading / unloading (or supervising it), refuelling and AdBlue top-ups, washing the truck, paperwork, checks, waiting with no known end time, train (TGV) journey to collect a vehicle</td></tr>
<tr><td>▱ crossed square</td><td><b>Availability</b></td><td>Waiting with a known end time (documents ready in 20 min), passenger in a two-driver crew, ferry without a bunk</td></tr>
<tr><td>🛏 bed</td><td><b>Rest / break</b></td><td>Meals, breaks, daily and weekly rest</td></tr></table>
<h3>The driver card</h3>
<ul><li>Linked to the <b>driver</b> (not the vehicle), personal: it is forbidden to lend it or to hold two.</li>
<li>Validity: <b>5 years</b>. Cost: borne by the <b>employer</b> (decree of 10 March 2006).</li>
<li>To be inserted <b>as soon as work starts</b>. Card forgotten: you do not drive (driving without a card is an infringement; “driving without card” alerts appear on the printout).</li>
<li>Card faulty, lost or stolen: apply for a replacement within <b>7 days</b> (1 week); you may drive for <b>15 days</b> at most with printed and signed printouts.</li>
<li>Tachograph out of order: repair within <b>7 days</b>; record activities by hand in the meantime.</li>
<li>Keep spare <b>paper rolls</b> in the vehicle so you can print in case of a check.</li></ul>
<h3>Checks</h3>
<ul><li>At a roadside check, you must account for your activities for <b>the current day and the previous 56 days</b> (28 days before 31 December 2024).</li>
<li>Download the driver card at least every <b>28 days</b>; the company keeps the data for <b>1 year</b>.</li>
<li>A day without driving (leave, illness) is justified by an <b>attestation of activities signed by the employer</b> (not a sworn statement or the previous day's chart).</li>
<li>A handling fault is attributed to the <b>driver</b>.</li></ul>
<h3>Penalties</h3>
<ul><li>Exceeding continuous driving, insufficient break or rest: <b>infringement</b> (fine) and possible <b>immobilisation of the vehicle</b>. No chart / no card: fine + immediate immobilisation.</li>
<li>Tampering with the tachograph: <b>criminal offence</b>, heavy fine (up to imprisonment).</li></ul>
<h3>Reading a printout (example from the assessment)</h3>
<p>A “24 h” printout shows the driver's name, the card number and validity, the registration number, the make (e.g. Siemens VDO), the odometer at start and end (e.g. 275,390 → 275,874 = <b>484 km</b>), the list of activities with start, end and duration, then the totals: driving (07 h 49), work, availability, rest (11 h 41), and the <b>alerts</b> (e.g. driving without a card). Spread-over = from the first activity to the end of work.</p>`,
    quiz: [
      { img: IMG.chrono, q: "The tachograph is compulsory for:", c: ["Vehicles over 3.5 t and those with more than 9 seats", "Vehicles over 19 t only", "Light goods vehicles", "Vehicles over 12 t only"], a: 0, e: "Over 3.5 t (goods) and more than 9 seats (passengers)." },
      { img: IMG.carte, q: "The tachograph card is linked to:", c: ["The driver", "The vehicle", "The company", "The trailer"], a: 0, e: "It is personal." },
      { img: IMG.carte, q: "Your colleague has lost their driver card. Can you lend them yours?", c: ["No, never", "Yes for one day", "Yes if they work for the same company", "Yes with the employer's agreement"], a: 0, e: "The card is strictly personal; you also cannot hold two." },
      { img: IMG.carte, q: "What is the validity period of the driver card?", c: ["5 years", "1 year", "3 years", "4 years"], a: 0, e: "The driver card is valid for 5 years; apply for renewal before it expires (at least 15 days before). Without a valid card you cannot drive a vehicle fitted with a digital tachograph." },
      { img: IMG.chrono, q: "How often must the tachograph be inspected?", c: ["2 years", "1 year", "6 months", "After the 4th anniversary then every 2 years"], a: 0, e: "Every 2 years (the student ticked 1 year: wrong)." },
      { q: "During a check, you must account for your activities over:", c: ["The current day and the previous 56 days", "The last 28 days only", "The current week", "The last 7 days"], a: 0, e: "56 days since 31 December 2024." },
      { q: "How long do you have to apply for the replacement of a faulty card?", c: ["7 days (1 week)", "1 month", "24 h", "15 days"], a: 0, e: "Seven calendar days." },
      { q: "Tachograph data must be kept by the company for:", c: ["1 year", "6 months", "3 months", "5 years"], a: 0, e: "One year minimum." },
      { img: IMG.chrono, q: "The chart (or card) must be inserted:", c: ["As soon as work starts", "At the start of driving", "Before the first period of work only", "When you think it necessary"], a: 0, e: "As soon as work starts, before any activity." },
      { q: "A tachograph handling fault is attributed to:", c: ["The driver", "The employer", "The loader", "The installer"], a: 0, e: "The driver is responsible for its use." },
      { q: "Which document justifies a period without driving?", c: ["An attestation signed by the employer", "A sworn statement", "The chart from the last driving day", "An employment contract"], a: 0, e: "Attestation of activities (the student ticked the previous day's chart: wrong)." },
      { img: IMG.chrono, q: "Tampering with the tachograph is:", c: ["A criminal offence, with a heavy fine", "A simple infringement", "Tolerated in an emergency", "Penalised with 6 points only"], a: 0, e: "Criminal offence." },
      { q: "Exceeding the maximum continuous driving time is:", c: ["An infringement, with a risk of vehicle immobilisation", "A criminal offence", "Without consequence", "An automatic licence suspension"], a: 0, e: "Infringement + possible immobilisation (the student ticked “fine” alone on the C2a: the expected penalty was immobilisation)." },
      { q: "Can failing to respect driving and rest times lead to the vehicle being immobilised?", c: ["Yes", "No", "Only in international transport", "Only for repeat offences"], a: 0, e: "Yes." },
      { q: "Besides the fine, what immediate penalty applies if you have not inserted a chart in the tachograph?", c: ["Immobilisation of the vehicle", "Withdrawal of the licence", "A warning", "None"], a: 0, e: "Immobilisation of the vehicle." },
      { q: "The cost of an employee's driver card is borne:", c: ["Always by the employer", "By the driver", "Half by each", "According to a company agreement"], a: 0, e: "Decree of 10 March 2006." },
      { q: "The tachograph records times in:", c: ["UTC time", "French time", "Time of the country of registration", "Time chosen by the driver"], a: 0, e: "UTC: +1 h in winter, +2 h in summer in France." },
      { img: IMG.ticket, q: "A printout shows an activity starting at 02:41 UTC on 12 September. What is the French time?", c: ["04:41", "02:41", "03:41", "01:41"], a: 0, e: "In summer, French time = UTC + 2 h." },
      { img: IMG.symboles, q: "You are waiting to be called to the dock, without knowing when. Selector position:", c: ["Other work", "Availability", "Rest", "Driving"], a: 0, e: "Unknown end of waiting = work." },
      { img: IMG.symboles, q: "You are waiting for your documents, which will be ready in 20 min. Selector position:", c: ["Availability", "Other work", "Rest", "Driving"], a: 0, e: "Duration known in advance = availability." },
      { img: IMG.symboles, q: "You are refuelling and topping up AdBlue. Selector position:", c: ["Other work", "Availability", "Rest", "Driving"], a: 0, e: "Crossed hammers." },
      { img: IMG.symboles, q: "You are having your meal. Selector position:", c: ["Rest", "Availability", "Other work", "Driving"], a: 0, e: "Bed symbol." },
      { img: IMG.symboles, q: "You are the passenger in a two-driver crew. Selector position:", c: ["Availability", "Rest", "Other work", "Driving"], a: 0, e: "Crossed square." },
      { img: IMG.symboles, q: "You are washing the truck. Selector position:", c: ["Other work", "Availability", "Rest", "Driving"], a: 0, e: "Washing is work (corrected in red by the trainer on the C2a)." },
      { img: IMG.symboles, q: "You are on the TGV to pick up a vehicle. Position to record:", c: ["Other work", "Rest", "Availability", "Driving"], a: 0, e: "Journey to take over a vehicle = work." },
      { q: "If the recording chart is compatible, the change of vehicle during the day appears:", c: ["On the same chart", "On a new chart", "Nowhere", "On the logbook only"], a: 0, e: "C2a question." },
      { q: "Are all recording charts compatible with all tachographs?", c: ["No", "Yes", "Yes if same make", "Yes since 2006"], a: 0, e: "A chart approved for the device is required." },
      { img: IMG.ticket, q: "On a printout, the odometer goes from 275,390 to 275,874 km. Distance travelled:", c: ["484 km", "384 km", "584 km", "474 km"], a: 0, e: "275,874 − 275,390 = 484." },
      { img: IMG.ticket, q: "“Driving without card” alerts on a printout mean:", c: ["The vehicle was driven with no card inserted: handling fault", "The card has expired", "The driver drove too much", "The tachograph is out of order"], a: 0, e: "Fault attributed to the driver." }
    ]
  },
  {
    id: "l4", icon: "🕒", title: "Working time, spread-over and breaks (transport code)",
    summary: "Difference between EU driving time rules and labour code: working time, spread-over, compulsory breaks, night work, pay, calculation on a chart.",
    sources: "photos: “Compliance with the regulations” sheet (working time, night hours), “labour law” notes, driving time rules assessment (working time, spread-over), chart exercise of 02/04, Monday/Tuesday exercise. Checked against the French transport code.",
    content: `
<h3>Definitions</h3>
<ul><li><b>Working time</b> (actual working time) = <b>driving + other work + availability</b>. It includes neither breaks nor rest.</li>
<li><b>Spread-over (shift span)</b> = from start of work to end of work, breaks included. <b>Working time = spread-over − breaks and rest.</b></li></ul>
<h3>Limits (transport code)</h3>
<table><tr><th>Rule</th><th>Duration</th></tr>
<tr><td>Maximum daily working time</td><td><b>12 h</b>; <b>10 h</b> if part of the work is done between 0:00 and 5:00</td></tr>
<tr><td>Maximum spread-over</td><td><b>15 h</b> (course notes; with a reduced 9 h daily rest)</td></tr>
<tr><td>Maximum weekly working time</td><td><b>56 h</b> long-distance drivers · <b>52 h</b> others · <b>48 h</b> parcel/courier delivery and vehicle delivery drivers</td></tr>
<tr><td>Break (transport code)</td><td>Working time of 6 h to 9 h: <b>30 min</b>; over 9 h: <b>45 min</b>; may be split into <b>15 min</b> blocks (2 × 15 or 3 × 15)</td></tr>
<tr><td>Night hours</td><td>From <b>21:00 to 6:00</b></td></tr></table>
<h3>Pay</h3>
<p>It may be calculated according to the <b>number of hours</b>, the number of <b>rotations/trips</b>, and <b>bonuses</b> (accident-free, fuel saving). Not according to load or distance if this endangers safety.</p>
<h3>Example: chart of 02/04</h3>
<ul><li>Start of work 9:00, end of work 21:00 → <b>spread-over 12 h</b>.</li>
<li>Rest from 14:00 to 15:00 = 1 h → working time 12 h − 1 h = <b>11 h</b>.</li>
<li>Driving from 15:00 to 21:00 with no break = 6 h of continuous driving → <b>infringement</b> (more than 4 h 30). If the 14:00–15:00 period had been recorded as “availability”, there would have been no break at all: also an infringement.</li>
<li>Restart at 6:00 the next day: 21:00 → 6:00 = 9 h = reduced rest, sufficient.</li></ul>
<h3>Example: Monday (exercise)</h3>
<p>Check at 8:00 (work 15 min), waiting for the job order (work 15 min), preparation (work 15 min), driving 8:45 → 11:00 (2 h 15), loading, driving, meal 12:30 → 13:30 (1 h rest), driving, unloading, driving 16:00 → 19:30 (3 h 30), end at 19:30. Spread-over 11 h 30, daily rest until Tuesday 6:00 = <b>10 h 30</b> (reduced). From Friday 20:00 to Monday 8:00: weekly rest of <b>60 h</b> (regular).</p>
<div class="key">Memo: working time 12 h (10 h at night) · spread-over 15 h · 56 / 52 / 48 h per week · break 30 min (6–9 h) / 45 min (> 9 h) · night 21:00–6:00.</div>`,
    quiz: [
      { q: "What does working time include?", c: ["Driving, availability and other tasks", "Driving only", "Driving, breaks and rest", "Daily and weekly rest"], a: 0, e: "Working time = driving + work + availability." },
      { q: "What does the working spread-over include?", c: ["Driving, availability, breaks and other tasks", "Driving only", "Daily and weekly rest", "Driving and weekly rest"], a: 0, e: "Everything between the start and end of work." },
      { q: "The maximum daily working time is:", c: ["12 h", "9 h", "10 h in all cases", "15 h"], a: 0, e: "12 h (10 h if work is done between 0:00 and 5:00)." },
      { q: "If part of the shift is worked between 0:00 and 5:00, daily working time is limited to:", c: ["10 h", "12 h", "9 h", "8 h"], a: 0, e: "Night work: 10 h." },
      { q: "Night hours in road transport are between:", c: ["21:00 and 6:00", "22:00 and 5:00", "0:00 and 5:00", "20:00 and 7:00"], a: 0, e: "21:00 – 6:00." },
      { q: "The maximum weekly working time of a long-distance driver (single week) is:", c: ["56 h", "48 h", "52 h", "60 h"], a: 0, e: "56 h long-distance drivers, 52 h others, 48 h parcel delivery/vehicle delivery drivers." },
      { q: "The maximum weekly working time in parcel/courier delivery is:", c: ["48 h", "52 h", "56 h", "45 h"], a: 0, e: "48 h for parcel delivery and vehicle delivery drivers." },
      { q: "For a working time of more than 9 h, the compulsory break (transport code) is:", c: ["45 min", "30 min", "15 min", "1 h"], a: 0, e: "30 min between 6 and 9 h, 45 min beyond 9 h." },
      { q: "For a working time between 6 h and 9 h, the compulsory break is:", c: ["30 min", "45 min", "15 min", "1 h"], a: 0, e: "May be split into 2 × 15 min." },
      { q: "The maximum spread-over of a day (course notes) is:", c: ["15 h", "12 h", "13 h 30", "17 h"], a: 0, e: "15 h = 24 h − 9 h of reduced rest." },
      { q: "How is working time calculated?", c: ["Spread-over − breaks and rest", "Spread-over + breaks", "Driving × 2", "Rest − driving"], a: 0, e: "Formula from the course sheet." },
      { q: "Chart of 02/04: start of work 9:00, end 21:00. What is the spread-over?", c: ["12 h", "11 h", "9 h 30", "13 h"], a: 0, e: "21:00 − 9:00 = 12 h." },
      { q: "Same chart: 1 h of rest from 14:00 to 15:00. What is the actual working time?", c: ["11 h", "12 h", "9 h 30", "10 h"], a: 0, e: "12 h − 1 h = 11 h." },
      { q: "Same chart: driving from 15:00 to 21:00 without stopping. Is there an infringement?", c: ["Yes: 6 h of continuous driving, more than 4 h 30", "No", "No if the driver is in a two-driver crew", "Yes: spread-over too long"], a: 0, e: "Continuous driving is limited to 4 h 30." },
      { q: "Same chart: if the 14:00–15:00 period had been recorded as “availability”, would there be an infringement?", c: ["Yes, there would be no driving break any more", "No", "Yes, spread-over exceeded", "No if under 12 h"], a: 0, e: "Availability is not a break." },
      { q: "A driver's pay may be calculated according to:", c: ["The number of hours, the number of rotations and bonuses", "The load carried", "The distance travelled only", "The average speed"], a: 0, e: "Driving time rules assessment, question 2." },
      { q: "A driver finishes on Friday at 20:00 and restarts on Monday at 8:00. Their weekly rest is:", c: ["60 h (regular rest)", "45 h", "72 h 30", "24 h"], a: 0, e: "Friday 20:00 → Monday 8:00 = 60 h (answer corrected by the trainer on the exercise)." },
      { q: "Monday: end of work 19:30, Tuesday: vehicle check at 6:00. The daily rest is:", c: ["10 h 30 (reduced rest)", "11 h (regular rest)", "9 h", "12 h"], a: 0, e: "19:30 → 6:00 = 10 h 30, less than 11 h: reduced rest." }
    ]
  }
];

const LESSONS_EN_2 = [
    {
      id: 'l5', icon: '📄', title: "Entering the profession: documents, vehicle and company",
      summary: "Initial / periodic driver CPC training (FIMO/FCO), driver card, requirements to be a haulier, Community licence, consignment note / CMR, site safety protocol, weights and lengths, roadworthiness tests, speed limiter.",
      sources: "photos: Kahoot (questions 6 to 40), category C licence supplement (questions 1 to 14). Checked against the Highway Code (weights and dimensions, speeds) and the FIMO/FCO texts.",
      content: `
<h3>Driver qualification</h3>
<ul><li>To be a professional driver, you need a <b>FIMO certificate</b> (initial driver CPC training, or an equivalent qualification) in addition to the licence.</li>
<li>The FIMO is valid for <b>5 years</b>; after that, the <b>FCO</b> (periodic driver CPC training) is required every <b>5 years</b>. Carrying dangerous goods also requires the <b>ADR</b>.</li>
<li>The <b>professional title of road haulage driver</b> gives the FIMO <b>by equivalence</b> (it is not a national education diploma).</li>
<li>Driver card (tachograph): <b>5 years</b>.</li></ul>
<h3>To be a haulier (company manager)</h3>
<p>You need the <b>certificate of professional competence</b>, <b>good repute</b>, financial standing and <b>premises / an establishment in France</b>. In public haulage, the <b>Community licence</b> is proof of registration in the register of hauliers and renters; it is the document that allows carriage for hire or reward with a vehicle over 3.5 t.</p>
<h3>Documents and instructions</h3>
<ul><li>The <b>consignment note</b> goes with the goods; internationally it is called the <b>CMR</b>.</li>
<li>The <b>site safety protocol</b> must be signed to have the right to <b>drive around the plant and unload</b>.</li>
<li>In the event of a serious dispute, the driver <b>reports back and waits for instructions</b> from the company.</li>
<li>Knowledge of <b>eco-driving (rational driving)</b> is essential.</li>
<li>Road freight transport is the <b>leading mode of transport</b> in France.</li></ul>
<h3>Weights and dimensions (general rule)</h3>
<table><tr><th>Vehicle</th><th>Maximum</th></tr>
<tr><td>Length of a single vehicle (rigid truck)</td><td><b>12 m</b></td></tr>
<tr><td>Length of an articulated combination (semi-trailer)</td><td><b>16.50 m</b></td></tr>
<tr><td>Length of a road train</td><td><b>18.75 m</b></td></tr>
<tr><td>Length of a loaded car-carrier road train</td><td><b>20.35 m</b></td></tr>
<tr><td>GVW of a single 3-axle vehicle</td><td><b>26 t</b></td></tr>
<tr><td>GVW increase for a 600 kg retarder</td><td><b>500 kg</b> maximum</td></tr>
<tr><td>Weight above which the drivers' hours rules (RSE) apply</td><td>more than <b>3.5 t</b></td></tr></table>
<h3>Vehicle: checks and equipment</h3>
<ul><li>Roadworthiness test (MOT) for HGVs over 3.5 t: <b>every year</b>, at an approved testing centre. A vehicle that has had several prohibition orders is tested more frequently.</li>
<li>Tachograph: checked <b>every 2 years</b>. <b>Speed limiter</b>: fitted to HGVs, it prevents exceeding <b>90 km/h</b>; it is checked at the annual roadworthiness test.</li>
<li>Speed of a 13 t vehicle on a motorway: <b>90 km/h</b>.</li>
<li>Fire extinguisher: compulsory on board an HGV (powder type, 6 kg minimum on the outside for the largest vehicles according to the category C supplement).</li></ul>`,
      quiz: [
        { q: "To be a professional driver you need:", c: ["A FIMO certificate", "A compulsory road haulage driver diploma", "A certificate of professional competence", "A licence with all categories"], a: 0, e: 'A category C licence is not enough: to drive an HGV professionally you need the initial qualification (FIMO, 140 h, or an equivalent diploma), then periodic training (FCO) every 5 years. The certificate of professional competence is for the company manager, not the driver.' },
        { q: "Your FIMO (initial driver CPC training) is valid for:", c: ["5 years", "10 years", "For life", "Depending on the licence validity"], a: 0, e: "Five years." },
        { q: "The refresher for the FIMO (FCO, periodic driver CPC training) takes place every:", c: ["5 years", "2 years", "3 years", "4 years"], a: 0, e: "FCO every 5 years." },
        { q: "Every 5 years, the road haulage driver must take the training course:", c: ["FCO", "FIMO", "ADR, compulsorily", "Road safety awareness"], a: 0, e: "FCO (the ADR is separate, for dangerous goods)." },
        { q: "The professional title of road haulage driver:", c: ["Gives the FIMO by equivalence", "Is a national education diploma", "Does not exempt you from the FIMO exam", "Allows you to drive before age 18"], a: 0, e: 'The professional title (Ministry of Labour) counts as initial qualification: its holder gets the driver qualification card without taking the FIMO. It is not a national education diploma and does not change the minimum age.' },
        { q: "To be a haulier you need:", c: ["A certificate of professional competence", "Culinary skills", "A PO box", "An annual tax bill"], a: 0, e: "Certificate of professional competence." },
        { q: "To be a haulier you also need:", c: ["Good repute", "A payment certificate", "Premises in Europe", "No conditions at all"], a: 0, e: "Good repute + financial standing + premises in France." },
        { q: "In public haulage, is the Community licence proof of registration in the register of hauliers?", c: ["Yes", "No", "Only internationally", "Only for renters"], a: 0, e: "Category C supplement, question 6." },
        { q: "Which document allows carriage for hire or reward with a vehicle over 3.5 t?", c: ["The Community licence", "The consignment note", "The vehicle registration certificate", "The FIMO certificate"], a: 0, e: "A certified true copy of the licence must be on board." },
        { q: "What is the international consignment note more commonly called?", c: ["CMR", "ADR", "Delivery note", "Licence"], a: 0, e: 'CMR = Convention on the Contract for the International Carriage of Goods by Road (Geneva, 1956). By extension, the international transport document is called “the CMR”. ADR concerns dangerous goods.' },
        { q: "The driver must sign the site safety protocol in order to have the right to:", c: ["Drive around the plant and unload", "Get the transport invoice paid", "Chat with the dock manager", "Take a break"], a: 0, e: 'The site safety protocol describes the site rules (traffic, speed, zones, equipment). Without reading and signing it, the driver may neither drive inside the host company nor load or unload there.' },
        { q: "In the event of a serious dispute, the driver must:", c: ["Report back and wait for instructions from the company", "Handle the situation alone", "Let it turn into a conflict", "Criticise the company's organisation"], a: 0, e: 'The driver represents the company but does not decide the commercial follow-up: stay calm, record the facts (reservations, photos), inform the operations office and apply the instructions received.' },
        { q: "For a driver, it is essential to have knowledge of:", c: ["Eco-driving (rational driving)", "IT", "Business management", "Foreign languages"], a: 0, e: 'Rational driving (safety, anticipation, fuel saving) is the heart of the job and the longest part of the FIMO programme (65 h). Other knowledge is useful but not essential.' },
        { q: "Road freight transport is the leading mode of transport in France:", c: ["True", "False", "Not always", "It depends"], a: 0, e: 'True: road carries about 85–90% of the tonne-kilometres of inland freight transport in France, far ahead of rail and inland waterways.' },
        { img: IMG.truck, q: "Maximum length of a single goods vehicle:", c: ["12 m", "16.50 m", "18.75 m", "20.35 m"], a: 0, e: "12 m." },
        { img: IMG.semi, q: "Maximum length of a semi-trailer combination:", c: ["16.50 m", "12 m", "18.75 m", "20.35 m"], a: 0, e: "16.50 m." },
        { img: IMG.semi, q: "Maximum length of a road train:", c: ["18.75 m", "16.50 m", "12 m", "20.35 m"], a: 0, e: "18.75 m." },
        { img: IMG.semi, q: "Maximum length of a loaded car-carrier road train:", c: ["20.35 m", "18.75 m", "16.50 m", "12 m"], a: 0, e: "20.35 m." },
        { q: "As a general rule, the maximum GVW of a single 3-axle vehicle is:", c: ["26 t", "19 t", "32 t", "44 t"], a: 0, e: "26 tonnes." },
        { q: "Maximum GVW increase for a vehicle fitted with a 600 kg retarder:", c: ["500 kg", "600 kg", "1,000 kg", "None"], a: 0, e: "Category C supplement, question 8." },
        { q: "Above what weight is a goods vehicle subject to the drivers' hours rules (RSE)?", c: ["3.5 t", "7.5 t", "12 t", "19 t"], a: 0, e: "More than 3.5 t." },
        { q: "The roadworthiness test (MOT) of a goods vehicle over 3.5 t takes place:", c: ["Every year", "Every 2 years", "After the 4th anniversary, then every 2 years", "Before any sale"], a: 0, e: "Annual test." },
        { q: "Who carries out vehicle roadworthiness tests?", c: ["An approved testing centre", "The police", "The dealership", "The employer"], a: 0, e: "Approved vehicle testing service." },
        { img: IMG.vit90, q: "I am fitted to HGVs and I never exceed 90 km/h. What am I?", c: ["The speed limiter", "The cruise control", "The on-board computer", "The GPS"], a: 0, e: 'The speed limiter is compulsory on vehicles over 3.5 t and prevents exceeding 90 km/h. Cruise control keeps a speed chosen by the driver but does not stop them from accelerating.' },
        { img: IMG.vit90, q: "You are driving a 13 t GVW vehicle with no dangerous goods. Maximum speed on a motorway:", c: ["90 km/h", "80 km/h", "110 km/h", "100 km/h"], a: 0, e: "Category C supplement, question 14." }
      ]
    },
    {
      id: 'l6', icon: '🚦', title: "Highway Code and safety for the category C licence",
      summary: "Road signs specific to HGVs, slow lane, alcohol and reaction time, lights, accident report form, aquaplaning, safety distances.",
      sources: "photos: category C licence supplement (questions 15 to 20), core module “general knowledge of traffic and road safety”. Checked against the Highway Code.",
      content: `
<h3>Road signs to know (category C supplement)</h3>
<table><tr><th>Road sign</th><th>Meaning</th></tr>
<tr><td>Round, truck with “10 m”</td><td>No entry for vehicles or combinations <b>over 10 m long</b> (the student had written “no exceeding the length”: marked wrong, you must say <b>no entry</b>)</td></tr>
<tr><td>Round, “3.5 m” between two vertical arrows</td><td>No entry for vehicles <b>over 3.5 m high</b></td></tr>
<tr><td>Round, red truck to the left of a car</td><td><b>No overtaking</b> for goods vehicles</td></tr>
<tr><td>Rectangle “N 137 – PONS” with a truck pictogram</td><td><b>Direction / recommended route</b> sign for HGVs (direction of the town via the N 137 road for HGVs)</td></tr>
<tr><td>Black square, V-shaped arrow and chequered pattern</td><td><b>End of lane</b> (lane reduction / merging)</td></tr></table>
<h3>Traffic rules</h3>
<ul><li>On a motorway, the <b>lane reserved for slow vehicles</b> must be used below <b>60 km/h</b> (according to the signs).</li>
<li>At night in clear weather, <b>main beam headlights</b> must light up the road effectively for at least <b>100 m</b>; dipped headlights for 30 m.</li>
<li>In <b>heavy rain</b>, <b>rear</b> fog lights are <b>forbidden</b> (reserved for fog and snow), because they dazzle other drivers.</li>
<li>A working <b>windscreen washer</b> is compulsory.</li>
<li>The <b>accident report form</b> is not compulsory to carry on board; it is <b>not</b> enough in the event of a personal injury accident (call the police).</li>
<li>The <b>safety distance</b> increases with speed; outside built-up areas, an HGV over 3.5 t leaves at least <b>50 m</b> to the vehicle in front.</li>
<li>The risk of <b>aquaplaning</b> is greater on <b>motorways</b> (high speed).</li></ul>
<h3>Alcohol and reaction</h3>
<ul><li>Alcohol <b>lengthens</b> reaction time (it does not shorten it).</li>
<li>Drinking water <b>does not lower</b> the blood alcohol level: only time eliminates it.</li>
<li>For the category C licence, eyesight is checked at the medical examination (minimum acuity required in the worse eye, with correction: <b>1/10</b>, and 8/10 for both eyes together, according to the order on medical conditions).</li></ul>`,
      quiz: [
        { img: IMG.l10, q: "What does a round road sign with a truck and the text “10 m” mean?", c: ["No entry for vehicles over 10 m long", "No overtaking for 10 m", "Height limited to 10 m", "Safety distance of 10 m"], a: 0, e: "Length limit = no entry beyond it." },
        { img: IMG.h35, q: "What does a round road sign “3.5 m” between two vertical arrows mean?", c: ["No entry for vehicles over 3.5 m high", "No entry for vehicles over 3.5 t", "Width limited to 3.5 m", "Length limited to 3.5 m"], a: 0, e: "Height limited to 3.5 m (the student's correct answer)." },
        { img: IMG.nodep, q: "A round road sign showing a red truck to the left of a car means:", c: ["No overtaking for HGVs", "No HGVs", "End of no overtaking", "Lane reserved for HGVs"], a: 0, e: "HGVs must not overtake other motor vehicles." },
        { img: IMG.finvoie, q: "A black square road sign with a V-shaped arrow and a chequered pattern indicates:", c: ["End of lane (lane reduction)", "A lane reserved for HGVs", "A level crossing", "A rest area"], a: 0, e: "Merging signal." },
        { img: IMG.dir, q: "A rectangular road sign “N 137 – PONS” with a truck pictogram indicates:", c: ["The recommended route for HGVs to Pons via the N 137", "A ban on HGVs", "A speed limit", "An HGV car park"], a: 0, e: "Direction sign intended for HGVs (the student had answered “ban”: wrong)." },
        { q: "On a motorway, below what speed must you use the lane reserved for slow vehicles?", c: ["60 km/h", "80 km/h", "90 km/h", "40 km/h"], a: 0, e: "60 km/h (the student had written 80 km/h)." },
        { q: "Does alcohol in the blood shorten reaction time?", c: ["No, it lengthens it", "Yes", "Yes, below 0.5 g/l", "It has no effect"], a: 0, e: "Alcohol lengthens reaction time." },
        { q: "Does the blood alcohol level go down when you drink water?", c: ["No", "Yes", "Yes, if you drink a lot of water", "Yes, with coffee"], a: 0, e: "Only time eliminates alcohol." },
        { q: "In heavy rain, can you use the rear fog lights?", c: ["No", "Yes", "Yes, at night only", "Yes, on a motorway"], a: 0, e: "Forbidden in rain: they dazzle. Reserved for fog and snow." },
        { q: "Is an accident report form enough in the event of a personal injury accident?", c: ["No", "Yes", "Yes, if the injuries are minor", "Yes, if both drivers agree"], a: 0, e: "Personal injury accident: call the police or gendarmerie." },
        { q: "Is carrying an accident report form on board a legal requirement?", c: ["No", "Yes", "Yes, for HGVs only", "Yes, internationally"], a: 0, e: "Recommended, not compulsory." },
        { q: "Is a working windscreen washer compulsory?", c: ["Yes", "No", "Only in winter", "Only for HGVs"], a: 0, e: "Yes." },
        { q: "At night in clear weather, main beam headlights must light up the road effectively for at least:", c: ["100 m", "30 m", "50 m", "200 m"], a: 0, e: "100 m (30 m for dipped headlights)." },
        { q: "The risk of aquaplaning is greater:", c: ["On a motorway", "On a road", "In a built-up area", "When stationary"], a: 0, e: "High speed." },
        { q: "Does the safety distance to the vehicle in front vary with speed?", c: ["Yes", "No", "Only at night", "Only for HGVs"], a: 0, e: "It increases with speed." },
        { q: "Outside built-up areas, an HGV over 3.5 t must leave at least what distance to the vehicle in front?", c: ["50 m", "20 m", "100 m", "10 m"], a: 0, e: "Article R412-12 of the Highway Code." }
      ]
    },
    {
      id: 'l7', icon: '🧮', title: "Driver calculations: time, distances, areas, conversions",
      summary: "The calculations from the ECF tests: conversions, adding times, mileage, areas and volumes, pallets, estimated driving time.",
      sources: "photos: core module “logic and calculation test”, ECCP questionnaire (calculations). Methods checked.",
      content: `
<h3>Conversions</h3>
<ul><li>1 km = 1,000 m → 2,300 m = <b>2.3 km</b>; 10 km = <b>10,000 m</b>.</li>
<li>1 h = 60 min → 3 h 30 = <b>210 min</b>; 2 h 45 = <b>165 min</b>; 3 h 25 = <b>205 min</b>; 4 h 30 = <b>270 min</b>. 300 s = <b>5 min</b>.</li>
<li>1 t = 1,000 kg → 10 t 02 (10 t and 20 kg) = <b>10,020 kg</b>; 9,680 kg = <b>9.68 t</b>.</li></ul>
<h3>Adding times</h3>
<p>Add the minutes, then convert each block of 60 min into 1 h.</p>
<ul><li>1 h 45 + 30 min + 3 h 30 + 55 min = 4 h + 160 min = <b>6 h 40</b>.</li>
<li>2 h 30 + 4 h 15 + 75 min + 1 h 25 = 7 h + 145 min = <b>9 h 25</b>.</li>
<li>3 h 45 + 55 min + 33 min + 3 h 37 = 6 h + 170 min = <b>8 h 50</b>.</li></ul>
<h3>Distances and speeds</h3>
<ul><li>Distance travelled = arrival km − departure km: 216,008 − 215,687 = <b>321 km</b>; 329,785 − 329,568 = <b>217 km</b>.</li>
<li>Truck at 1.2 km per minute: in 20 min, 1.2 × 20 = 24 km = <b>24,000 m</b>.</li>
<li>Range: 64 l ÷ 8 l/100 km = 8 → 8 × 100 = <b>800 km</b>.</li>
<li>Time = distance ÷ speed: 280 km at 47 km/h = 5.96 h ≈ <b>5 h 58</b> (0.96 h × 60 = 57.6 min).</li></ul>
<h3>Areas, volumes, pallets</h3>
<ul><li>Area = length × width: 8 m × 2.50 m = <b>20 m²</b>; 9 m × 2.45 m = <b>22.05 m²</b>.</li>
<li>Volume = L × W × H: 8 × 2.50 × 3 = <b>60 m³</b> (unit m³, not m²).</li>
<li>Pallets on the floor: floor 7 m × 2.40 m, pallets 1.20 m × 0.80 m → along the length 7 ÷ 1.20 = 5 (1 m left over); across the width 2.40 ÷ 0.80 = 3 → <b>15 pallets</b>. Other orientation: 7 ÷ 0.80 = 8 and 2.40 ÷ 1.20 = 2 → 16 pallets. Maximum answer: <b>16</b>.</li></ul>
<div class="key">Habits: note the unit requested (m, km, min, kg, m², m³); 1 h = 60 min; distance ÷ speed = time; L × W = area.</div>`,
      quiz: [
        { q: "My truck travels 1.2 km in one minute. In 20 min, it travels:", c: ["24,000 m", "2,400 m", "12,000 m", "240 m"], a: 0, e: "1.2 × 20 = 24 km = 24,000 m (the student had written 2,400 m: unit error)." },
        { q: "My car uses 8 l/100 km and the full tank holds 64 l. Range:", c: ["800 km", "512 km", "640 km", "80 km"], a: 0, e: "64 ÷ 8 = 8 → 800 km." },
        { q: "Floor of 7 m × 2.40 m, pallets of 1.20 m × 0.80 m. Maximum number of pallets on the floor:", c: ["16", "15", "17", "12"], a: 0, e: "8 along the length (0.80 m) × 2 across the width (1.20 m) = 16." },
        { q: "Vehicle 8 m long, 2.50 m wide, 3 m high. Floor area:", c: ["20 m²", "60 m²", "24 m²", "13.5 m²"], a: 0, e: "8 × 2.50 = 20 m²." },
        { q: "Same vehicle (8 × 2.50 × 3 m). Volume:", c: ["60 m³", "20 m³", "60 m²", "24 m³"], a: 0, e: "8 × 2.5 × 3 = 60 m³ (watch the unit)." },
        { q: "2,300 metres =", c: ["2.3 km", "23 km", "0.23 km", "230 km"], a: 0, e: "1 km = 1,000 m." },
        { q: "3 hours 30 =", c: ["210 min", "330 min", "180 min", "350 min"], a: 0, e: "3 × 60 + 30." },
        { q: "300 seconds =", c: ["5 min", "3 min", "30 min", "50 min"], a: 0, e: "300 ÷ 60." },
        { q: "10 t 02 (10 tonnes and 20 kg) =", c: ["10,020 kg", "10,200 kg", "1,002 kg", "10,002 kg"], a: 0, e: "10,000 + 20." },
        { q: "9,680 kg =", c: ["9.68 t", "96.8 t", "0.968 t", "968 t"], a: 0, e: "÷ 1,000." },
        { q: "2 h 45 in minutes:", c: ["165", "145", "245", "175"], a: 0, e: "120 + 45." },
        { q: "1 h 45 + 30 min + 3 h 30 + 55 min =", c: ["6 h 40", "6 h 20", "7 h 00", "5 h 40"], a: 0, e: "4 h + 160 min." },
        { q: "2 h 30 + 4 h 15 + 75 min + 1 h 25 =", c: ["9 h 25", "8 h 45", "9 h 05", "10 h 25"], a: 0, e: "7 h + 145 min = 9 h 25." },
        { q: "3 h 45 + 55 min + 33 min + 3 h 37 =", c: ["8 h 50", "8 h 30", "9 h 10", "7 h 50"], a: 0, e: "6 h + 170 min." },
        { q: "Mileage at departure 215,687, at arrival 216,008. Distance:", c: ["321 km", "421 km", "231 km", "1,321 km"], a: 0, e: "216,008 − 215,687." },
        { q: "Body of 9 m × 2.45 m. Usable area:", c: ["22.05 m²", "22.5 m²", "20.05 m²", "11.45 m²"], a: 0, e: "9 × 2.45." },
        { q: "Round of 280 km at an average of 47 km/h. Estimated driving time:", c: ["About 6 h (5 h 58)", "About 5 h", "About 7 h", "About 4 h 30"], a: 0, e: "280 ÷ 47 = 5.96 h." },
        { q: "4 h 30 in minutes:", c: ["270", "250", "430", "300"], a: 0, e: "4 × 60 + 30." }
      ]
    }
];

const SOURCES_EN = `<ul style="margin:0;padding-left:20px;font-size:.9rem">
<li><b>Course and exercise photos</b> (95 photos): ECF “Rigid truck driver” (application exercise no. 4, summary assessment C2a, theory assessment category C licence supplement, core module), “Compliance with regulations” and “The RSE (drivers' hours rules)” sheets, RSE assessment, tachograph ticket assessment, 561/2006 multiple-choice test (30 questions), Kahoot quiz (38 questions). Transcriptions are in the <code>sources/transcriptions</code> folder.</li>
<li><b>Checks</b>: Regulation (EC) 561/2006 and Regulation (EU) 165/2014 (<a href="https://eur-lex.europa.eu/FR/legal-content/summary/driving-time-and-rest-periods-in-the-road-transport-sector.html" target="_blank" rel="noopener">EUR-Lex</a>), Transport Code and Highway Code (Légifrance), DREAL / ministry fact sheets (2026 driving time memo card, 2025 inspection documents), <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000018008166" target="_blank" rel="noopener">order of 3 January 2008</a> (FIMO programme, final exam: 60-question multiple-choice test, pass mark 36).</li>
<li>The student's wrong answers on their assessments are flagged in the question explanations. None of the questions is an official exam question.</li></ul>`;

const DATA_EN = {
  secPerQ: DATA.secPerQ,
  lessons: LESSONS_EN_1.concat(LESSONS_EN_2),
  exams: DATA.exams.map((e) => Object.assign({}, e, { title: e.title.replace('Épreuve finale n°', 'Final exam no.').replace('· format examen (60 questions)', '· exam format (60 questions)') })),
  sources: SOURCES_EN
};
