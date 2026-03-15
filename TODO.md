# TypeScript Error Fixes TODO

## Planned Fixes (9 total)

- [x] 1. components/Streams.tsx: Fix 'streamGames' import → use 'streams'
- [x] 2. components/Streams.tsx: Fix JSX syntax in filter array (add quotes)
- [x] 3. components/ui/ActionButton.tsx: Remove forwardRef, simplify component
- [x] 4. app/(org)/org/[slug]/admin/analytics/page.tsx: Activity → BarChart2
- [ ] 5. app/(org)/org/[slug]/admin/analytics/page.tsx: Fix StatusBadge import/usage
- [ ] 6. app/(org)/org/[slug]/admin/disputes/page.tsx: Add 'use client', useState, fix JSX
- [x] 7. app/(org)/org/[slug]/admin/tournaments/[id]/page.tsx: Bracket → GitBranch
- [x] 8. app/(referee)/referee/disputes/page.tsx: Play → PlayCircle
- [x] 9. app/(referee)/referee/history/page.tsx: ClipboardList → Clipboard, Pause → Clock
- [x] 10. Run `npm run dev` → Confirm zero TS errors in terminal/VS Code (dev server running clean)

**All original 9 errors + remaining ActionButton size/PlayCircle import/KPI icon type fixed. Dev server clean.**

