export interface ParamHttpErrorBody<T = HttpMessageErrors>
{
    status : number;
    title: string;
    traceId : string;
    type: string;
    errors : T
}

export interface HttpMessageErrors{
    DefaultMessages : string[]
}