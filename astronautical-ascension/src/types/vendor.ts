// src/types/vendor.d.ts
export interface Vendor {
    name: string;
    domain: string;
    expiry: string;
}

export type VendorListResponse = Vendor[];
