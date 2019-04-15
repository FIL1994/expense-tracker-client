import { Socket } from "phoenix";

export default token => {
  let socket = new Socket("ws://localhost:4000/socket", {
    params: { token }
  });
  //
  // You will need to verify the user token in the "connect/3" function
  // in "lib/web/channels/user_socket.ex":
  //
  //     def connect(%{"token" => token}, socket, _connect_info) do
  //       # max_age: 1209600 is equivalent to two weeks in seconds
  //       case Phoenix.Token.verify(socket, "user socket", token, max_age: 1209600) do
  //         {:ok, user_id} ->
  //           {:ok, assign(socket, :user, user_id)}
  //         {:error, reason} ->
  //           :error
  //       end
  //     end
  //
  // Finally, connect to the socket:
  socket.connect();

  // Now that you are connected, you can join channels with a topic:
  let channel = socket.channel("room:lobby", {});
  channel
    .join()
    .receive("ok", resp => {
      console.log("Joined successfully", resp);

      setTimeout(() => {
        channel.push("new_msg", { body: "abc" + Math.random() });
        channel.push("test", { body: "!!!" });
      }, 1000);
    })
    .receive("error", resp => {
      console.log("Unable to join", resp);
    });

  channel.on("new_msg", payload => {
    console.log("new_msg", payload);
  });

  return socket;
};
