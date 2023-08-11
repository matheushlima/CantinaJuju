export interface LayersUser {
  id?: string;
  _id?: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  community: string;
  status: string;
  email: string;
  name: string;
  roles: string[];
  address: {
    code: string;
    state: string;
    city: string;
    district: string;
    address: string;
    number: string;
  };
}

export interface LayersUserRelated {
  members: LayersMember[];
}

export interface LayersMember {
  id: string;
  createdAt: string;
  updatedAt: string;
  active: boolean;
  community: string;
  access: {
    permissions: string[];
    user: string;
  }[];
  name: string;
  alias: string;
  birth: string;
  groups: LayersGroup[];
}

export interface LayersGroup {
  id: string;
  name: string;
  type: string;
  season: string;
}
