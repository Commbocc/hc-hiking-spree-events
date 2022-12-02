import { reactive } from "vue";
import airtable from "./airtable";

export const events = reactive<{
  loading: boolean;
  data: Event[];
}>({
  loading: true,
  data: [],
});

export async function fetchEvents() {
  events.loading = true;
  try {
    const { data } = await airtable.get("/tblc8iCPX0Ky8x6RV", {
      params: {
        view: "AppView",
      },
    });

    events.data = data.records;
  } catch (error) {
    console.error(error);
  } finally {
    events.loading = false;
  }
}
