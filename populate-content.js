function populateContent(data) {
    document.getElementById("content").innerHTML = `
              <center>
                  <h1>${data.name}</h1>
              </center>
              <hr class="divider" />
              <ul class="topics-list">
                  ${data.topics
            ?.map(
                (t) => `
                      <li>
                          <h1><i><u>${t.name}</u></i></h1>
                          <ul class="questions-list">
                              ${t.questions
                        ?.map(
                            (q) => `
                                  <li>
                                      <h3>${q.question}</h3>
                                      ${q.answer ? `<p>${q.answer}</p>` : ""}
                                      ${q.link
                                    ? `<div class="link"><a href=${q.link} target="_blank">${q.link}</a></div>`
                                    : ""
                                } 
                                      ${q.hints
                                    ? `<pre><code>${q.hints}</code></pre>`
                                    : ""
                                } 
                                  </li>
                                  <hr />
                              `
                        )
                        .join("")}
                          </ul>
                      </li>
                      <hr class="divider" />
                  `
            )
            .join("")}
              </ul>
          `;
}