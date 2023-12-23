import hyRequest from "@/service"

export const getBanners = () => {
    return hyRequest.get({
        url: '/banner'
    })
}