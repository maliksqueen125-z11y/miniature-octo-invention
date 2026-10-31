export default {
  async fetch() {

    const IMAGE_URL = "https://spindly-crypt.pages.dev/vilzz%20(3).jpg";
    const CLICK_URL = "https://possiblyliar.com/jtdyzwx9dp?key=6ceffee47be217154eecc6045d5bb044 
";

    const html = `
      <html>
      <body>
        <a href="${CLICK_URL}">
          <img src="${IMAGE_URL}">
        </a>
      </body>
      </html>
    `;

    return new Response(html, {
      status: 404,
      headers: {
        "Content-Type": "text/html; charset=UTF-8"
      }
    });
  }
};
