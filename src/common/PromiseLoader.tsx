import React, { ReactElement, useCallback, useEffect, useState } from "react";

class Error<ErrorType> {
    readonly error: ErrorType;

    constructor(error: ErrorType) {
        this.error = error;
    }
}

export type Loader<Type, ErrorType> = {
    state: 'loading';
    map: <ReturnType>(
        onLoading: ReturnType,
        onError: ReturnType,
        onLoaded: (data: Type) => ReturnType
    ) => ReturnType;
} | {
    state: 'error';
    error: Error<ErrorType>;
    map: <ReturnType>(
        onLoading: ReturnType,
        onError: ReturnType,
        onLoaded: (data: Type) => ReturnType
    ) => ReturnType;
} | {
    state: 'loaded';
    data: Type;
    map: <ReturnType>(
        onLoading: ReturnType,
        onError: ReturnType,
        onLoaded: (data: Type) => ReturnType
    ) => ReturnType;
};


export const usePromiseLoader = <Type extends Object, ErrorType>(promise: () => Promise<Type>, errorHandler?: (error: any) => ErrorType) => {
    const [loader, setLoader] = useState<Loader<Type, ErrorType>>({ state: 'loading', map: <ReturnType,>(onLoading: ReturnType, _onError: ReturnType, _onLoaded: (data: any) => ReturnType) => onLoading });

    const getData = useCallback((reload: boolean = false) => {
        if (reload) setLoader({ state: 'loading', map: <ReturnType,>(onLoading: ReturnType, _onError: ReturnType, _onLoaded: (data: any) => ReturnType) => onLoading })
        const prom = promise()
            .then((response) => {
                setLoader({
                    state: 'loaded',
                    data: response,
                    map: <ReturnType,>(_onLoading: ReturnType, _onError: ReturnType, onLoaded: (data: Type) => ReturnType) => onLoaded(response)
                });
            })
        if (errorHandler) prom.catch((error) => {
            console.log(error)
            setLoader({
                state: 'error',
                error: error,
                map: <ReturnType,>(_onLoading: ReturnType, onError: ReturnType, _onLoaded: (data: any) => ReturnType) => onError
            });
        })
    }, []);

    useEffect(() => {
        getData(true);
    }, [getData])
    return { loader, getData };
}

export function usePromiseFunctionalLoader<Type, InType, ErrorType>(input: (InType | undefined), promise: (input: InType) => Promise<Type>, validation?: (input: InType) => boolean) {
    const [loader, setLoader] = useState<Loader<Type, ErrorType>>({ state: 'loading', map: <ReturnType,>(onLoading: ReturnType, _onError: ReturnType, _onLoaded: (data: any) => ReturnType) => onLoading });
    const getData = useCallback((reload: boolean = false) => {
        if (reload) setLoader({ state: 'loading', map: <ReturnType,>(onLoading: ReturnType, _onError: ReturnType, _onLoaded: (data: any) => ReturnType) => onLoading })
        if (input === undefined || (validation && !validation(input))) {
            return
        }
        promise(input)
            .then((response) => {
                setLoader({
                    state: 'loaded',
                    data: response,
                    map: <ReturnType,>(_onLoading: ReturnType, _onError: ReturnType, onLoaded: (data: Type) => ReturnType) => onLoaded(response)
                })
            })
            .catch((error) => {
                console.log(error)
                setLoader({
                    state: 'error',
                    error: error,
                    map: <ReturnType,>(_onLoading: ReturnType, onError: ReturnType, _onLoaded: (data: any) => ReturnType) => onError
                });
            })
    }, [input])


    useEffect(() => {
        getData()
    }, [getData]);
    return { loader, getData };
}

type PromiseLoaderProps<Type, ErrorType> = {
    loader: Loader<Type, ErrorType>;
    loading?: ReactElement;
    error: ((error: ErrorType) => ReactElement) | ReactElement;
    loaded: (result: Type) => ReactElement
}

export const PromiseLoader = <Type, ErrorType>(
    {
        loader,
        loading,
        error,
        loaded
    }: PromiseLoaderProps<Type, ErrorType>): ReactElement => {
    function isError(obj: any): obj is Error<ErrorType> {
        return obj instanceof Error;
    }

    if (loader.state === 'loading') {
        return (!loading) ? <div className="loader"></div> : loading;
    } else if (loader.state === 'error') {
        return (typeof error === 'function') ? error(loader.error.error) : error
    } else if (loader.state === 'loaded') {
        return loaded(loader.data)
    }
    throw new Error('Invalid loader state');
}
