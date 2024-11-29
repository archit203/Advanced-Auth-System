export const getEnv = (key: string, defalutValue : string = ""): string => {
    const value = process.env[key];
    if(value === undefined){
        if(defalutValue){
            return defalutValue;
        }
        throw new Error(`Environment variable ${key} is not defined`);
    }

    return value;
}