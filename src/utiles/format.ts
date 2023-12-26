
//格式化数字
export const formatCount = (count: number) => {
    if(count > 100000) {
        return Math.floor(count / 10000) + '万'
    } else {
        return count
    }
}

//改变图片尺寸

export const getImageBySize = (imageUrl: string, width: number, height: number = width) => {
    return imageUrl + `?param=${width}x${height}`
}