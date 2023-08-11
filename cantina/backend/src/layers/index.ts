import axios, { AxiosInstance } from "axios";
import {
  LayersUser,
  LayersSearchedUsers,
  LayersUserRelated,
  LayersSearchUsersParams,
  LayersSeason,
  LayersAppInstallation,
  LayersSyncProfile,
} from "./interface";
export default class LayersAPI {
  private appToken: string;
  private appCommunity: string;
  private appId: string;
  private apiUrl: string;
  private Axios: AxiosInstance;

  constructor(token: string, community: string, appId: string, apiUrl: string) {
    this.appToken = token;
    this.appId = appId;
    this.appCommunity = community;
    this.apiUrl = apiUrl;
    this.Axios = axios.create({
      baseURL: this.apiUrl,
      headers: {
        Authorization: token,
        "Community-Id": community,
      },
    });
  }

  async checkStatus(): Promise<string> {
    const data: string = (await this.Axios.get("/status")).data;
    return data;
  }

  async validateSession(
    session: string,
    userId: string,
    communityId: string
  ): Promise<void> {
    await this.Axios.get("/sso/session/validate", {
      params: {
        session: session,
        userId: userId,
        community: communityId,
      },
      headers: {
        Authorization: this.appToken,
        "Community-Id": communityId,
      },
    });
  }

  async getInstallationMetadata(community: string) {
    const { data } = await this.Axios.get(
      `/appmaker/apps/${this.appId}/installations/${community}`
    );
    return data.metadata;
  }

  async updateInstallationMetadata(community: string, metadata: any) {
    const { data } = await this.Axios.put(
      `/appmaker/apps/${this.appId}/installations/${community}`,
      { metadata }
    );
    const updatedMetadata = data.metadata;
    return updatedMetadata;
  }

  async uploadEntities(entities: any, community: string, syncRunId: string) {
    const apiUrl = this.apiUrl.replace("/v1", "/v2");
    const { data: syncRun } = await this.Axios.post(
      `${apiUrl}/sync/${syncRunId}/uploadEntities`,
      entities,
      {
        headers: {
          "Community-Id": community,
        },
      }
    );

    return syncRun;
  }

  async getUser(userId: string, community: string): Promise<LayersUser> {
    const { data: user } = await this.Axios.get(`/users/${userId}`, {
      headers: {
        "community-id": community,
      },
    });
    return user;
  }

  async searchUsers(
    params: LayersSearchUsersParams,
    community: string
  ): Promise<LayersSearchedUsers> {
    const { data: user } = await this.Axios.get("/users/search", {
      headers: {
        "community-id": community,
      },
      params,
    });
    return user;
  }

  async getUserRelated(
    id: string,
    community: string
  ): Promise<LayersUserRelated> {
    const { data: related } = await this.Axios.get(`/users/${id}/related`, {
      headers: {
        "community-id": community,
      },
    });
    return related;
  }

  async getActiveSeason(community: string): Promise<LayersSeason> {
    const { data: season } = await this.Axios.get("/season/active", {
      headers: {
        "Community-Id": community,
      },
    });
    return season;
  }

  async getSyncProfile(community: string): Promise<LayersSyncProfile[]> {
    const apiUrl = this.apiUrl.replace("/v1", "/v2");
    const { data } = await this.Axios.get(`${apiUrl}/sync/profile`, {
      headers: {
        "Community-Id": community,
      },
    });
    const syncProfiles = data.filter(
      (data: { appId: string }) => this.appId === data.appId
    );
    return syncProfiles;
  }

  async getAppInstallations(appId: string): Promise<LayersAppInstallation[]> {
    const { data: installations } = await this.Axios.get(
      `/appmaker/apps/${appId}/installations`
    );

    return installations;
  }
}
