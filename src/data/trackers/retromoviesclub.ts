// src/data/trackers/retromoviesclub.ts

import type { TrackerRegistryEntry } from "@/data/tracker-registry"

export const retromoviesclub: TrackerRegistryEntry = {
  // ── Identity ────────────────────────────────────────────────────────
  slug: "retromoviesclub",
  name: "Retro Movies Club",
  abbreviation: "RMC",
  url: "https://retro-movies.club",
  description:
    "Private movie only tracker exclusively for films released up to and including the year 2000. Intended to be the 'definitive archive of classic films'. built on UNIT3D.", // The quote is literally a quote from the welcome thread.

  // ── Platform & API ──────────────────────────────────────────────────
  platform: "unit3d",
  apiPath: "/api/user",

  // ── Content ─────────────────────────────────────────────────────────
  specialty: "'Retro' (up to and including the year 2000) Movies", // Can remove the quotes and bracketed part. Just adding clarity due to the naturally subjective description.
  contentCategories: ["Movies"],
  language: "English",

  // ── Visual ──────────────────────────────────────────────────────────
  color: "#600a96",
  logo: "",

  // ── External Links ──────────────────────────────────────────────────
  trackerHubSlug: "", // Think it's not publicly accesssible so can't check.
  statusPageUrl: "", // Can't find one.

  // ── Community ───────────────────────────────────────────────────────
  userClasses: [
    { name: "Outtake", requirements: "Pruned accounts - removed due to prolonged inactivity." },
    {
      name: "Blacklisted",
      requirements: "Banned for violating site rules - all privileges revoked.",
    },
    {
      name: "Shelved",
      requirements: "Disabled accounts - temporarily or permanently shelved by staff.",
    },
    { name: "Audience", requirements: "View/download only role - can't upload or invite." },
    { name: "Auditioning", requirements: "Pending email verification" },
    { name: "Seat Filler", requirements: "0 B Uploaded, 0.00 Ratio" },
    { name: "Actor", requirements: "0 B Uploaded" },
    { name: "Film Buff", requirements: "1 TiB Uploaded, 0.40 Ratio, 1 Month account age" },
    { name: "Supporting Actor", requirements: "5 TiB Uploaded, 0.40 Ratio, 2 Months account age" },
    {
      name: "Leading Actor",
      requirements: "20 TiB Uploaded, 0.40 Ratio, 3 Months account age, Mod Bypass",
    },
    {
      name: "Movie Star",
      requirements: "50 TiB Uploaded, 0.40 Ratio, 6 Months account age, Mod Bypass",
    },
    {
      name: "Superstar",
      requirements:
        "0.40 Ratio, 1 Month account age, 1 Month avg seedtime, 5 TiB min seedsize, HnR Immune, Mod Bypass",
    },
    {
      name: "Preservationist",
      requirements:
        "0.40 Ratio, 3 Months account age, 2 Months avg seedtime, 10 TiB min seedsize, Freeleech, HnR Immune, Mod Bypass",
    },
    {
      name: "Screen Legend",
      requirements: "100 TiB Uploaded, 0.40 Ratio, 1 Year account age, Freeleech",
    },
    { name: "Executive", requirements: "Internal team members with elevated site privileges" },
    {
      name: "Producer",
      requirements: "Trusted uploaders and content creators who keep the reels spinning",
    },
    {
      name: "ViP",
      requirements: "Very Important Person - donors and honored members of the community",
    },
    {
      name: "Film Editor",
      requirements: "Torrent editors who polish descriptions, fix metadata, and keep quality high",
    },
    {
      name: "Script Supervisor",
      requirements: "Torrent moderators who review uploads and ensure site standards",
    },
    {
      name: "Assistant Director",
      requirements: "Moderators who manage the community, handle reports, and keep order",
    },
    { name: "Director", requirements: "Administrators with full site management capabilities" },
    { name: "Studio Mogul", requirements: "Site owner" },
    { name: "Animatronic", requirements: "Automated system accounts (SystemBot, announcements)" },
  ], // Unless stated otherwise all roles have unlimited download privileges, can upload and can invite.
  releaseGroups: [
    { name: "EORMC", description: "Internal Encodes and Remux group." },
    { name: "RMWD", description: "Internal WebDL release group." },
    { name: "OldT", description: "Old Toons internal WebDL release group. " },
  ],
  bannedGroups: [
    "[Oj]",
    "3LTON",
    "4yEo",
    "ADE",
    "AFG",
    "AniHLS",
    "AnimeRG",
    "AniURL",
    "AROMA",
    "aXXo",
    "CM8",
    "CrEwSaDe",
    "DeadFish",
    "DNL",
    "ELiTE",
    "eSc",
    "FaNGDiNG0",
    "Flights",
    "FRDS",
    "FUM",
    "GalaxyRG",
    "HAiKU",
    "HDS",
    "HDTime",
    "INFINITY",
    "ION10",
    "iPlanet",
    "JIVE",
    "KiNGDOM",
    "LAMA",
    "Leffe",
    "LOAD",
    "mHD",
    "nHD",
    "NOIVTC",
    "nSD",
    "RARBG",
    "RDN",
    "REsuRRecTioN",
    "RMTeam",
    "SANTi",
    "SicFoI",
    "SPASM",
    "STUTTERSHIT",
    "Telly",
    "TM",
    "UPiNSMOKE",
    "WORLD",
    "WAF",
    "xRed",
    "XS",
    "YELLO",
    "YIFY",
    "YTS",
    "YTSMX",
    "ZKBL",
    "ZmN",
  ],
  notableMembers: [
    "Hitchcock (Owner/Internal)",
    "BobSherunkle (Admin/Internal)",
    "tokar86a (Internal)",
    "Bogart (Internal)",
    "tenebrific (Internal)",
    "un1t (Moderator)",
    "malefis (Torrent Moderator)",
    "Paladinz (Torrent Editor)",
    "void (Torrent Editor)",
  ],

  // ── Rules ───────────────────────────────────────────────────────────
  rules: {
    minimumRatio: 0.4,
    seedTimeHours: 48,
    loginIntervalDays: 0,
    fulfillmentPeriodHours: 168,
  },

  // ── Status ──────────────────────────────────────────────────────────
  warning: false,
  warningNote: "",

  // ── Flags ───────────────────────────────────────────────────────────
  draft: true,
  supportsTransitPapers: true,
  profileUrlPattern: "/users/{username}",
}
