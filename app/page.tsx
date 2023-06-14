import getCurrentUser from "@/app/actions/getCurrentUser"
import getListings, { IListingParams } from "@/app/actions/getListings"
import Container from "@/app/components/Container"
import EmptyState from "@/app/components/EmptyState"
import ListingCard from "@/app/components/listings/ListingCard"
import { FC } from "react"

interface HomeProps {
  searchParams: IListingParams
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams)
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return <EmptyState showReset />
  }

  return (
    <Container>
      <div
        className="
            pt-24
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
            "
      >
        {listings.map((listing) => {
          return (
            <ListingCard
              key={listing.id}
              currentUser={currentUser}
              data={listing}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default Home
