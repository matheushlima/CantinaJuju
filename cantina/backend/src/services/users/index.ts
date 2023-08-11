import config from "../../config";
import studentData from "../../data/students.json";
import LayersAPI from "../../layers";

interface Student {
  id: number;
  name: string;
}

export function getAllUserNames(): string[] {
  const userNames = studentData.map((student) => student.name);
  return userNames;
}

export function getStudentById(studentId: number): Student | undefined {
  const student = studentData.find((student) => student.id === studentId);
  return student;
}

export function getUsersRelated(userId: string, community: string) {
  const layersAPI = new LayersAPI(
    config.layers_token,
    config.app_community,
    config.app_id,
    config.layers_url
  );

  console.log(userId);

  const usersRelated = layersAPI.getUserRelated(userId, community);

  return usersRelated;
}

interface LayersIntentRequestBody {
  context: {
    issuedAt: string;
    action: IntentAction;
    community: string;
  };
  secret: string;
  data?: {
    user?: {
      id: string;
      name: string;
      alias: string;
      timezone: string;
      language: string;
      accountId: string;
    };
  };
}

export declare type IntentAction =
  | "@layers:payments:Tabs:getRelated"
  | "@layers:payments:Items:getRelated";
