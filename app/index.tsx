import { Redirect } from "expo-router"

export default function Index() {
  return <Redirect href="/splash" /> // route groups like (auth) don't count as part of the URL
}