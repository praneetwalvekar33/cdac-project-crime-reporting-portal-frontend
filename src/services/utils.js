import config from '../config';
export function createUrl(path){
    return `${config}/${path}`;
}

export function createError(error){
    return {status: 'error', error};
}