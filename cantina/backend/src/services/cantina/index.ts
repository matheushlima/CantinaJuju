import cantinaData from "../../data/cantina.json";
import studentData from "../../data/students.json";

interface CantinaItem {
  name: string;
  image: string;
}

interface Cantina {
  id: number;
  items: CantinaItem[];
}

export function getCantinaByStudentId(studentId: number): Cantina | undefined {
  const student = studentData.find((student) => student.id === studentId);
  if (!student) {
    return undefined;
  }

  const cantina = cantinaData.find(
    (cantina) => cantina.id === student.cantinaId
  );
  return cantina;
}

export function getTopSellingItems(
  cantinaId: number,
  limit: number
): CantinaItem[] {
  const cantina = cantinaData.find((cantina) => cantina.id === cantinaId);
  if (!cantina) {
    return [];
  }

  // Logic to get top selling items (you can sort by sales count or any other criteria)
  const topItems = cantina.items.slice(0, limit);
  return topItems;
}

export function getItemsByDay(
  cantinaId: number,
  dayOfWeek: number
): CantinaItem[] {
  const cantina = cantinaData.find((cantina) => cantina.id === cantinaId);
  if (!cantina) {
    return [];
  }

  // Logic to filter items by day of the week
  const itemsByDay = cantina.items.filter((item) =>
    item.availableDays.includes(dayOfWeek)
  );
  return itemsByDay;
}
