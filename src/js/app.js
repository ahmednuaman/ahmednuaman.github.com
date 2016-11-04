import 'whatwg-fetch'

const fetch = window.fetch

const text = (el, text) => {
  document.getElementById(el).innerHTML = text
}

const init = async () => {
  const githubRequest = await fetch('https://api.github.com/users/ahmednuaman')
  const githubData = await githubRequest.json()

  text('gh-followers', githubData.followers)
  text('gh-repos', githubData.public_repos)

  const stackoverflowRequest = await fetch('https://api.stackexchange.com/2.2/users/398939?order=desc&sort=reputation&site=stackoverflow')
  const stackoverflowData = await stackoverflowRequest.json()
  const stackoverflowUser = stackoverflowData.items[0]

  text('so-points', stackoverflowUser.reputation)
  text('so-cups', `${stackoverflowUser.badge_counts.gold}/${stackoverflowUser.badge_counts.silver}/${stackoverflowUser.badge_counts.bronze}`)
}

init()
