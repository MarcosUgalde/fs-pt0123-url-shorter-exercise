export const login = (client) => async (params) => {
  try {
    const { data } = await client.post("/auth/signup", params);
    console.info("> ligin data: ", data);
  } catch (error) {
    console.info("> login error: ", error.message);
  }
};