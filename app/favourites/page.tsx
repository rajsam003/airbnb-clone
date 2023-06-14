import getCurrentUser from "@/app/actions/getCurrentUser"
import getFavouriteListings from "@/app/actions/getFavouriteListings"
import EmptyState from "@/app/components/EmptyState"
import FavouriteClient from "@/app/favourites/FavouriteClient"
import React from "react"

const ListingPage = async () => {
  const listings = await getFavouriteListings()
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favourites found"
        subtitle="Looks like you have no favourite listings."
      />
    )
  }

  return <FavouriteClient listings={listings} currentUser={currentUser} />
}

export default ListingPage
