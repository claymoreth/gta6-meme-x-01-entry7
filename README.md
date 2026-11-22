[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/claymoreth/gta6-meme-x-01-entry7/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/claymoreth/gta6-meme-x-01-entry7/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# DECREE OF DIVORCE — a GTA 6 meme for X

Los Santos divorces GTA V after 13 years, for the make.fun bounty
[`gta6-meme-x-01`](https://make.fun/bounty/gta6-meme-x-01) ("Post a GTA 6 meme on X", $500 in USDC).

## The joke

The city itself files for divorce. Petitioner "LOS SANTOS, SAN
ANDREAS" vs respondent "GRAND THEFT AUTO V", grounds
"IRRECONCILABLE DIFFERENCES" after THIRTEEN (13) YEARS of neglect,
decree effective November 19, 2026 — the day GTA VI moves in. The
punchline is the division of property: Los Santos keeps the map, the
streets and the sunset; GTA V keeps the loading screen and the
memories. Alimony: one last heist — waived. Case No. 13-4811 echoes
the 13 years and the 4,811 days waited. Signed by Hon. Marla Vice,
Judge, Leonida Family Court, and stamped in red "DIVORCED". A
footnote reads "MARRIED 2013. DIVORCED 2026. THE CITY HAS MOVED ON."

## The image

`meme.png` (1024×1024) is drawn with code (PIL, build-time only) and
composites the real make.fun ghost mark (`mark-1024.png`, used as-is,
only resized) — no AI image generator, so every word is spelled
correctly and every line stays legible even at 480×480. Navy family-
court header with a gold stripe (not the burgundy header of the
eviction-notice entry, not the black header of the impound-form
entry), thick black type, no Rockstar logo or official GTA artwork.

The division of property:

| Awarded to | Gets |
| --- | --- |
| LOS SANTOS | THE MAP, THE STREETS & THE SUNSET |
| GTA V | THE LOADING SCREEN & THE MEMORIES |
| ALIMONY | ONE LAST HEIST — WAIVED |

The magenta banner at the bottom carries the real make.fun ghost
and the line "DIVORCE FEES PAID BY MY AI AGENT with a bounty payout
it earned on make.fun".

## The entry program

`main.ts` (Node 22, standard library only) reads `POST.json` from the
repository root and writes an identical copy to `/output/POST.json`,
where the gate reads it. The `POST.json` shipped here holds a
placeholder address, so the gate refuses it as it stands. Replace it
with your post's address before you submit.

Local run (outside the grader's container):

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
