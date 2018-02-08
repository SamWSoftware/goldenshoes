import React from "react";
import "./FBChatWidget.css";
import * as $ from "jquery";

const FBChatWidget = ({ facebookPageName }) => {
  var t = {
    delay: 125,
    overlay: $(".fb-overlay"),
    widget: $(".fb-widget"),
    button: $(".fb-button")
  };

  setTimeout(function() {
    $("div.fb-livechat").fadeIn();
  }, 8 * t.delay);

  $(".ctrlq").on("click", function(e) {
    e.preventDefault();
    t.overlay.is(":visible")
      ? (t.overlay.fadeOut(t.delay),
        t.widget
          .stop()
          .animate({ bottom: 0, opacity: 0 }, 2 * t.delay, function() {
            $(this).hide("slow"), t.button.show();
          }))
      : t.button.fadeOut("medium", function() {
          t.widget
            .stop()
            .show()
            .animate({ bottom: "30px", opacity: 1 }, 2 * t.delay),
            t.overlay.fadeIn(t.delay);
        });
  });

  return (
    <div className="fb-livechat">
      <div className="ctrlq fb-overlay" />
      <div className="fb-widget">
        <div className="ctrlq fb-close" />
        <div
          className="fb-page"
          data-href={`https://www.facebook.com/${facebookPageName}/`}
          data-tabs="messages"
          data-width="360"
          data-height="400"
          data-small-header="true"
          data-hide-cover="true"
          data-show-facepile="false"
        >
          <blockquote
            cite={`https://www.facebook.com/${facebookPageName}/`}
            className="fb-xfbml-parse-ignore"
          />
        </div>
        <div className="fb-credit">
          <a
            href="https://www.labnol.org/software/facebook-messenger-chat-widget/9583/"
            target="_blank"
          >
            Facebook Chat Widget by Digital Inspiration
          </a>
        </div>
        <div id="fb-root" />
      </div>
      <a
        //href={`https://m.me/${facebookPageName}`}
        title="Send us a message on Facebook"
        className="ctrlq fb-button"
      />
    </div>
  );
};

export default FBChatWidget;
