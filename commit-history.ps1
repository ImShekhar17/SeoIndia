# ===== DETERMINE START DATE (1 DECEMBER) =====
$today = Get-Date

if ($today.Month -lt 12) {
    # If current month is Jan–Nov, use December of previous year
    $startDate = Get-Date -Year ($today.Year - 1) -Month 12 -Day 1
} else {
    # If current month is December
    $startDate = Get-Date -Year $today.Year -Month 12 -Day 1
}

$endDate = $today
$currentDate = $startDate

# ===== REALISTIC COMMIT MESSAGES =====
$messages = @(
    "Initial project structure setup",
    "Added core functionality",
    "Improved UI layout",
    "Fixed minor bugs",
    "Refactored code for readability",
    "Updated SEO logic",
    "Optimized performance",
    "Added new feature",
    "Improved responsiveness",
    "Code cleanup",
    "Updated documentation",
    "Bug fixes and improvements"
)

while ($currentDate -le $endDate) {

    $dateString = $currentDate.ToString("yyyy-MM-ddTHH:mm:ss")

    # Change file so Git can commit
    Add-Content progress.log "Worked on $($currentDate.ToShortDateString())"

    git add .

    # Pick random commit message
    $message = Get-Random -InputObject $messages

    $env:GIT_AUTHOR_DATE = $dateString
    $env:GIT_COMMITTER_DATE = $dateString

    git commit -m "$message"

    $currentDate = $currentDate.AddDays(1)
}

# Cleanup
Remove-Item Env:GIT_AUTHOR_DATE -ErrorAction SilentlyContinue
Remove-Item Env:GIT_COMMITTER_DATE -ErrorAction SilentlyContinue
