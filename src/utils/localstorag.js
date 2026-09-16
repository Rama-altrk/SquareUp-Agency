export const setItemInLocalstorage = (key, dataArray) =>{
    try {
        localStorage.setItem(key , JSON.stringify(dataArray))
        console.log("set Doooooone");
        
    } catch (error) {
        console.log(`error in ${key} when setItem`, error);
    }
}


export const getItemFromLocalstorage = (key)=>{
    try {
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : []
        console.log("get Dooooone")
    } catch (error) {
        console.log(`error in ${key} when getItem` , error);
    }

}

export const removeFromLocalstorage =(key , deletedId) =>{
    try {
        const currentData = getItemFromLocalstorage(key)

        const newData = currentData.filter(item => item.id !== parseInt(deletedId))

        setItemInLocalstorage(key , newData)
        return newData
        console.log("remove Dooooone")
    } catch (error) {
        console.log(`error when remove`, error)
    }
}


export const addToLocalstorage = (key , newItem)=>{
    try {
        const currentData = getItemFromLocalstorage(key)

        const counterKey = `${key}_counter`
        let lastSavedId = parseInt(localStorage.getItem(counterKey)) || 0
        const nextId = lastSavedId + 1

        localStorage.setItem(counterKey, nextId.toString())

        const itemWithId = { id: nextId, ...newItem }
        const newData = [...currentData, itemWithId]

        setItemInLocalstorage(key , newData)
        console.log("add Dooooone")
    } catch (error) {
        console.log(`error when add item ${key}` , error)
    }
} 

export const updateLocalstorage = (key , itemId , updatedField) =>{
    const currentData = getStorageData(key)

    const updatedData = currentData.map(item => {
        if (item.id === parseInt(itemId)) 
            return { ...item, ...updatedFields }

        return item
        console.log("update Dooooone")
    })
    setItemInLocalstorage(key , updatedData)
    return updatedData
}