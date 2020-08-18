const actions = {
    search: (type: string, value: any, active: boolean) => ({
        type: type,
        value: value,
        active: active
    })
}

export { actions }