
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    address?: Nullable<string>;
    email?: Nullable<string>;
    name?: Nullable<string>;
    phone?: Nullable<string>;
}

export class CreateDeviceInput {
    name?: Nullable<string>;
    initialValue?: Nullable<number>;
}

export class Address {
    id?: Nullable<string>;
    address?: Nullable<string>;
}

export class Device {
    id?: Nullable<string>;
    name?: Nullable<string>;
    initialValue?: Nullable<number>;
}

export class User {
    id?: Nullable<string>;
    email?: Nullable<string>;
    name?: Nullable<string>;
    phone?: Nullable<string>;
    address?: Nullable<Address>;
    device?: Nullable<Device>;
    balance?: Nullable<number>;
}

export abstract class IQuery {
    abstract users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract address(): Nullable<Nullable<Address>[]> | Promise<Nullable<Nullable<Address>[]>>;
}

type Nullable<T> = T | null;
