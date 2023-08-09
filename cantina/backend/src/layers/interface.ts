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

export interface LayersSearchedUsers {
  total: number;
  hits: LayersUser[];
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

export interface LayersSearchUsersParams {
  createdAt?: string;
  updatedAt?: string;
  status?: string;
  active?: boolean;
  roles?: string;
  q?: string;
}

export interface LayersSeason {
  id: string;
  name: string;
  createdAt: string;
  activatedAt: string;
  deactivatedAt: string;
}

export interface LayersSyncProfile {
  id: string;
  appId: string;
  enabled: boolean;
  settings: {
    season: string;
    autoInviteUsers: boolean;
  };
  frequency: string;
  expiresAt: string;
  lastCreatedSyncRunId: string;
  lastSyncRunStartedAt: string;
  nextRunAt: string;
  locked: boolean;
  lockedAt: string;
  lockedBy: string;
  cursors: {
    updatedAt: string;
  };
}

export interface LayersAppInstallation {
  approved: boolean;
  community: string;
  approvedAt: string;
  approvedBy: string;
  active: boolean;
  activatedAt: string;
  installed: boolean;
  installedBy: boolean;
  uninstalledAt: string;
  uninstalledBy: string;
  uninstalledReason: string;
  pendingUpdate: boolean;
  pendingUpdateSince: string;
  requiresManualUpdate: boolean;
  status: string;
  consentedFeatures: {
    id: string;
    consentedAt: string;
  }[];
  contactInfo: {
    name: string;
    telephone: string;
    message: string;
  };
  manifest: LayersManifest;
  metadata?: any;
}

export interface LayersManifest {
  id: string;
  approval: "automatic" | "manual";
  visibility: "private" | "unlisted" | "public";
  displayName: string;
  description: string;
  icon: {
    url: string;
    width: number;
    height: number;
  };
  createdAt: string;
  updatedAt: string;
  api: {
    enabled: boolean;
    roles: {
      value: string;
      reason: string;
    }[];
  };
  portals: {
    enabled: boolean;
    data: {
      oauth: {
        enabled: boolean;
        scopes: string[];
        response_type: string;
        grant: string;
      };
      origins: string;
      placement: string[];
      features: string[];
      alias: string;
      title: string;
      location: string;
      action: string;
      icon: string;
    }[];
  };
  services: {
    enabled: boolean;
    requests: {
      action: string;
      reason: string;
    }[];
    responds: {
      action: string;
      reason: string;
      url: string;
    }[];
  };
  oauth: {
    enabled: boolean;
    scopes: string[];
    response_type: string;
    grant: string;
  };
  roles: {
    enabled: boolean;
    data: {
      title: string;
      value: string;
      group: string;
      hierarchy: number;
      incudes: string[];
      includedIn: string[];
      pinned: boolean;
    };
  };
}
