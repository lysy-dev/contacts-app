export const sliceList = (list:Array<any>, sliceSize:number)=>{
    const slices = []
    for(let i = 0; i*sliceSize < list.length; i+= sliceSize ){
        const slice = list.slice(i*sliceSize,(i+1)*sliceSize)
        slices.push(slice)
    }
    return slices
}