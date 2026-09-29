/* =====================================================================
   YOUR PORTFOLIO CONTENT
   This is the only file you need to edit.
   Change the text between the quotes "like this", save, and refresh.
   Every style (theme) reads from this file, so you only fill it in once.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- STYLE ----------
     Pick your look: "terminal", "clean", or "story".
     showThemePicker: true shows the style switcher in the corner.
     Set it to false once you've picked your favorite.            */
  theme: "terminal",
  showThemePicker: true,

  /* ---------- ABOUT YOU ---------- */
  name: "Julian Chancellor",
  initials: "JC",                       // shown if you don't add a photo
  photo: "",                            // optional: "images/headshot.jpg"
  headline: "Mechanical Engineering Student at UT Austin",
  tagline: "I like figuring out how things are put together.",   // used by the Story style
  school: "B.S. Mechanical Engineering, UT Austin, Class of 2030",
  location: "Austin, TX",
  status: "Looking for Summer 2027 internships",             // leave "" to hide

  about: "Freshman Mechanical Engineering student at UT Austin. I'm building hands-on skills through SolidWorks, 3D printing and E1 soldering certifications at Texas Inventionworks, and involvement with RAS Robomaster, SASE, and SHPE.",

  /* ---------- CONTACT ---------- */
  email: "julianman087@gmail.com",
  resume: "resume.pdf",                 // upload your resume with this exact name, or "" to hide
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/julian-chancellor-278a843a9/" },
    { label: "GitHub",   url: "https://github.com/arandomperrson" },
  ],

  /* ---------- EXPERIENCE ----------
     Newest first. Copy a { ... }, block to add another.
     Jobs, internships, research, org leadership, and your own
     business all count.                                           */
  experience: [
    {
      role: "Member",
      org: "RAS Robomaster",
      place: "UT Austin",
      dates: "2026 – now",
      summary: "Collaborate with a student engineering team designing and building competitive combat/RoboMaster robots, gaining exposure to mechanical design and build processes.",
      tags: ["SolidWorks", "Mechanical Design", "Robotics"],
    },
    {
      role: "Member",
      org: "SASE (Society of Asian Scientists and Engineers)",
      place: "UT Austin",
      dates: "2026 – now",
      summary: "Participate in a professional engineering student organization focused on technical development, mentorship, and career readiness.",
      tags: ["Professional Development"],
    },
    {
      role: "Member",
      org: "SHPE (Society of Hispanic Professional Engineers)",
      place: "UT Austin",
      dates: "2026 – now",
      summary: "Engage with a professional engineering student organization supporting academic and professional development for future engineers.",
      tags: ["Professional Development"],
    },
    {
      role: "Class President",
      org: "Mount Pleasant High School",
      place: "Mount Pleasant, TX",
      dates: "2025 – 2026",
      summary: "Elected by classmates to represent the senior class and coordinate class initiatives and events.",
      tags: ["Leadership", "Public Speaking"],
    },
    {
      role: "Treasurer (Officer)",
      org: "National Honor Society",
      place: "Mount Pleasant, TX",
      dates: "2025 – 2026",
      summary: "Managed chapter finances and helped organize service projects and events for members.",
      tags: ["Financial Management", "Event Planning"],
    },
    {
      role: "Section Leader",
      org: "Saxophone, Band Program",
      place: "Mount Pleasant, TX",
      dates: "2023 – 2026",
      summary: "Led and mentored a section of student musicians and ran sectional rehearsals in preparation for UIL competitions.",
      tags: ["Leadership", "Mentorship"],
    },
  ],

  /* ---------- PROJECTS ----------
     2 to 4 projects works best. Class projects count!
     "result" is one line about what happened or what you learned.
     "url" can link to a demo, GitHub repo, or photos ("" for none). */
  projects: [
    // No projects yet — add your first CAD build, robotics project,
    // or class project here once you have one to show off.
  ],

  /* ---------- SKILLS ----------
     Group them however makes sense for your major.               */
  skills: [
    { group: "CAD & Fabrication", items: ["SolidWorks", "3D Printing", "Electrical Soldering (E1 certified, TIW)"] },
    { group: "Engineering Coursework", items: ["Calculus III", "Engineering Physics I + Lab", "Chemistry I + Lab", "AP Physics C", "AP Statistics"] },
    { group: "Core Competencies", items: ["Problem-Solving & Analytical Thinking", "Technical Teamwork", "Time Management"] },
  ],

  /* ---------- AWARDS (optional, use [] for none) ---------- */
  awards: [
    "Truckload Carriers Association Scholarship",
    "Academic Blanket Award — Geometry, Algebra II, Physics/Pre-Calculus, AP Physics C",
    "AP World History Exam: 5 | AP Statistics Exam: 5",
    "UIL State Solo & Ensemble Qualifier (2023–2026)",
    "UIL Region IV All-Region Band Qualifier (2021, 2023–2025)",
    "FBLA State & Nationals Qualifier, UX Design (2025)",
  ],
};