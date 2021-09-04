import axios from 'axios';

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
});

export interface Address {
    city: string;
    state: string;
    street: string;
    neighborhood: string;
    postalCode: string;
}

export async function getAddressFromCEP(cep: string): Promise<Address> {
    const response = await api.get(`${cep}/json`);
    const {
        logradouro: street,
        bairro: neighborhood,
        localidade: city,
        uf: state,
        cep: postalCode,
    } = response.data;
    return {
        city,
        state,
        street,
        neighborhood,
        postalCode,
    };
}
