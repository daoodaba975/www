export interface Experience {
  role: string;
  company?: string;
  context: string;
  /** ISO year-month, e.g. "2026-04". Also feeds <time dateTime>. */
  start: string;
  /** ISO year-month. Omit for an ongoing role. */
  end?: string;
  /** Path under /public. Omit to fall back on the generic briefcase icon. */
  logo?: string;
}

/** Ordered from the most recent end date to the oldest. */
export const experiences: Experience[] = [
  {
    role: "Full Stack Engineer - Architecture & Security",
    company: "Niane Technologies",
    context: "Hybrid, full time",
    start: "2026-04",
    logo: "/img/career/experience/niane.webp",
  },
  {
    role: "Mentor",
    company: "Xarala",
    context: "Online, part-time",
    start: "2022-02",
    end: "2026-05",
    logo: "/img/career/experience/xarala.webp",
  },
  {
    role: "FullStack Developer",
    company: "Turing Consulting Group",
    context: "Remote, full time",
    start: "2022-11",
    end: "2026-03",
    logo: "/img/career/experience/turing.webp",
  },
  {
    role: "Teacher JavaScript / Mobile Development",
    company: "CIGA",
    context: "On-site, part-time",
    start: "2023-12",
    end: "2026-02",
    logo: "/img/career/experience/ciga.webp",
  },
  {
    role: "FullStack Software Engineer",
    company: "Norma",
    context: "Remote, full time",
    start: "2021-09",
    end: "2022-01",
    logo: "/img/career/experience/norma.webp",
  },
  {
    role: "Web Developer",
    company: "Turing Consulting Group",
    context: "Remote, full time",
    start: "2020-08",
    end: "2021-09",
    logo: "/img/career/experience/turing.webp",
  },
  {
    role: "FullStack Developer",
    context: "Freelance",
    start: "2018-05",
    end: "2021-09",
  },
  {
    role: "Frontend Developer",
    company: "Baobab TS",
    context: "Traineeship",
    start: "2018-10",
    end: "2019-02",
  },
];

/** "2026-04" -> "April 2026". */
function formatMonth(isoMonth: string) {
  const [year, month] = isoMonth.split("-").map(Number);

  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** "since April 2026" for an ongoing role, "February 2022 / May 2026" otherwise. */
export function formatPeriod({ start, end }: Pick<Experience, "start" | "end">) {
  return end
    ? `${formatMonth(start)} / ${formatMonth(end)}`
    : `since ${formatMonth(start)}`;
}

export interface Education {
  start: string;
  end: string;
  degree: string;
  school: string;
  logo: string;
  logoAlt: string;
}

export const educations: Education[] = [
  {
    start: "2019",
    end: "2020",
    degree:
      "Professional Certificate of Specialization in Web & Mobile Development.",
    school: "Sonatel Academy (ODC)",
    logo: "/img/career/education/sonatel_academy.webp",
    logoAlt: "ODC logo",
  },
  {
    start: "2016",
    end: "2019",
    degree: "Bachelor’s Degree in Software Engineering.",
    school: "Institut Supérieur de l'Informatique (ISI)",
    logo: "/img/career/education/groupe_isi.webp",
    logoAlt: "ISI logo",
  },
];
