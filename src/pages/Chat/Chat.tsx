import { useEffect } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Chat(): React.ReactElement {
    useEffect(() => {

        (window as any).watsonAssistantChatOptions = {
            integrationID: "1ca58ac9-d176-472f-90a1-3c5dff195bc2",
            region: "us-south",
            serviceInstanceID: "3894291c-8c0f-45a2-940a-41fefc55fb58",
            element: document.getElementById("chat-container"),
            hideCloseButton: true,
            showRestartButton: true,
            openChatByDefault: true,
            onLoad: function (instance: any) {
                instance.render();
            },
        };

        setTimeout(function () {
            const t = document.createElement("script");
            t.src =
                "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
            document.head.appendChild(t);
        }, 0);
    }, []);

    return (
        <>
            <Header />
            <div id="chat-container"></div>
            <Footer />
        </>
    );
}
export default Chat