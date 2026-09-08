// src/data/trackers/oldtoons.ts

import type { TrackerRegistryEntry } from "@/data/tracker-registry"

export const oldtoons: TrackerRegistryEntry = {
  // ── Identity ────────────────────────────────────────────────────────
  slug: "oldtoons",
  name: "OldToons",
  abbreviation: "OT",
  url: "https://oldtoons.world",
  description:
    "Dedicated to classic animation and vintage cartoons. A niche tracker for fans of retro animated content from the golden age of animation.",

  // ── Platform & API ──────────────────────────────────────────────────
  platform: "unit3d",
  apiPath: "/api/user",

  // ── Content ─────────────────────────────────────────────────────────
  specialty: "Classic Animation",
  contentCategories: ["TV"],
  language: "English",

  // ── Visual ──────────────────────────────────────────────────────────
  color: "#fbbf24",
  logo: "",

  // ── External Links ──────────────────────────────────────────────────
  trackerHubSlug: "",
  statusPageUrl: "",

  // ── Community ───────────────────────────────────────────────────────
  userClasses: [
    { name: "Pruned", requirements: "Removed for inactivity. 0 DL slots." },
    { name: "Banned", requirements: "Removed for violating tracker rules. Unlimited DL slots." },
    { name: "Disabled", requirements: "Temporarily or permanently disabled by staff. 0 DL slots." },
    { name: "Guest", requirements: "Staff assigned. Unlimited DL slots." },
    { name: "Validating", requirements: "Waiting for email verification. Unlimited DL slots." },
    {
      name: "Leech",
      requirements:
        "0 B Uploaded, 0.00 Ratio, 0 account age, N/A average seedtime, 0 B Seedsize, 0 Uploads. 0 DL slots.",
    },
    {
      name: "User",
      requirements:
        "0 B Uploaded, 0.40 Ratio, 0 account age, N/A average seedtime, 0 B Seedsize, 0 Uploads. Unlimited DL slots, Can upload torrents.",
    },
    {
      name: "PowerUser",
      requirements:
        "1 TiB Uploaded, 0.40 Ratio, 1 Month account age, N/A average seedtime, 0 B Seedsize, 0 Uploads. Unlimited DL slots, Can upload torrents, Can send invites.",
    },
    {
      name: "SuperUser",
      requirements:
        "5 TiB Uploaded, 0.40 Ratio, 2 Months account age, N/A average seedtime, 0 B Seedsize, 0 Uploads. Unlimited DL slots, Can upload torrents, Can send invites.",
    },
    {
      name: "ExtremeUser",
      requirements:
        "20 TiB Uploaded, 0.40 Ratio, 3 Months account age, N/A average seedtime, 0 B Seedsize, 0 Uploads. Unlimited DL slots, Can upload torrents, Can send invites, Torrent moderation bypass.",
    },
    {
      name: "InsaneUser",
      requirements:
        "50 TiB Uploaded, 0.40 Ratio, 6 Months account age, N/A average seedtime, 0 B Seedsize, 0 Uploads. Unlimited DL slots, Can upload torrents, Can send invites, Torrent moderation bypass.",
    },
    {
      name: "Veteran",
      requirements:
        "100 TiB Uploaded, 0.40 Ratio, 1 Year account age, N/A average seedtime, 0 B Seedsize, 0 Uploads. Unlimited DL slots, Can upload torrents, Can send invites, Freeleech, HnR Immune, Torrent moderation bypass.",
    },
    {
      name: "Seeder",
      requirements:
        "0 B Uploaded, 0.40 Ratio, 1 Month account age, 1 Month average seedtime, 5 TiB Seedsize, 0 Uploads. Unlimited DL slots, Can upload torrents, Can send invites, HnR Immune, Torrent moderation bypass.",
    },
    {
      name: "Archivist",
      requirements:
        "0 B Uploaded, 0.40 Ratio, 3 Months account age, 2 Months average seedtime, 10 TiB Seedsize, 0 Uploads. Unlimited DL slots, Can upload torrents, Can send invites, Freeleech, HnR Immune, Torrent moderation bypass.",
    },
    {
      name: "Uploader",
      requirements:
        "Staff assigned. Unlimited DL slots, Can upload torrents, Can send invites, Freeleech, HnR Immune, Torrent moderation bypass.",
    },
    {
      name: "Trustee",
      requirements:
        "Staff assigned. Unlimited DL slots, Can upload torrents, Can send invites, Freeleech, HnR Immune, Torrent moderation bypass.",
    },
    {
      name: "VIP",
      requirements:
        "Staff assigned. Unlimited DL slots, Can upload torrents, Can send invites, Freeleech, Double Upload, HnR Immune, Torrent moderation bypass.",
    },
    {
      name: "Internal",
      requirements:
        "Staff assigned. Unlimited DL slots, Can upload torrents, Can send invites, Freeleech, HnR Immune, Torrent moderation bypass.",
    },
    {
      name: "Editor",
      requirements:
        "Staff assigned. Unlimited DL slots, Can upload torrents, Can send invites, Freeleech, HnR Immune, Torrent moderation bypass.",
    },
    {
      name: "Torrent Moderator",
      requirements:
        "Staff assigned. Unlimited DL slots, Can upload torrents, Can send invites, Freeleech, HnR Immune, Torrent moderation bypass.",
    },
    {
      name: "Bot",
      requirements:
        "Staff assigned. Unlimited DL slots, Can upload torrents, HnR Immune, Torrent moderation bypass.",
    },
  ], // Unless stated otherwise all roles have unlimited download privileges,
  releaseGroups: [
    { name: "EORMC", description: "Retro Movies Club Encodes and Remux group." },
    { name: "RMWD", description: "Retro Movies Club WebDL release group." },
    { name: "OldT", description: "Internal WebDL release group. " },
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
    "FGT",
    "Flights",
    "FRDS",
    "FUM",
    "GalaxyRG",
    "HAiKU",
    "HD2DVD",
    "HDS",
    "HDTime",
    "Hi10",
    "INFINITY",
    "ION10",
    "iPlanet",
    "JIVE",
    "KiNGDOM",
    "LAMA",
    "Leffe",
    "LOAD",
    "mHD",
    "NhaNc3",
    "nHD",
    "NOIVTC",
    "nSD",
    "PiRaTeS",
    "PRODJi",
    "RAPiDCOWS",
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
    "WAF",
    "xRed",
    "XS",
    "YELLO",
    "YIFY",
    "YTS",
    "ZKBL",
    "ZmN",
    "4f8c4100292",
    "Azkars",
    "Syncr0ndi",
  ], // Last three entries have requested to not be uploaded but I assume it's fine to treat them the same here.
  notableMembers: [
    "Jhonny (Owner/Internal)",
    "tenebrific (Admin/Internal)",
    "maddogfargo (Admin/Internal)",
    "daemon93 (Moderator/Internal)",
    "BobSherunkle (Moderator/Internal)",
    "HDVinnie (Coder)",
    "Tooner (Coder)",
    "ZukoXZoku (Torrent Moderator)",
    "Utena1999 (Torrent Moderator)",
    "K3V (Torrent Moderator)",
    "Ziggy1999 (Torrent Moderator)",
  ],
  // ── Rules ───────────────────────────────────────────────────────────
  rules: {
    minimumRatio: 0.4,
    seedTimeHours: 72,
    loginIntervalDays: 90,
  },

  // ── Status ──────────────────────────────────────────────────────────
  warning: false,
  warningNote: "",

  // ── Flags ───────────────────────────────────────────────────────────
  draft: false,
  supportsTransitPapers: true,
  profileUrlPattern: "/users/{username}",
}
