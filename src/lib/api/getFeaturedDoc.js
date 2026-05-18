
const getFeaturedDoc = async () => {
  try {
    const res = await fetch(`${process.env.PUBLIC_API_URL}/featuredDoc`);

    if (!res.ok) {
      return {
        success: false,
        status: res.status,
        message: res.statusText,
      };
    }

    const data = await res.json();

    return {
      success: true,
      data,
    };

  } catch (error) {
    return {
      success: false,
      status: 500,
      message: error.message,
    };
  }
};

export default getFeaturedDoc;