export const transformShopFilters = (data) => {
    return {
        id: data.id,
        name: data.name
    }
}

export const transformFoodItems = (data, shops) => {
    return {
        id: data.id,
        name: data.name,
        shop: shops.filter(item => item.id === data.shop),
        price: data.price,
        thumbnail: data.thumbnail
    }
}