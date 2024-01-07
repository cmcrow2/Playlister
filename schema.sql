create table users (
  user_id int auto_increment primary key,
  name text not null,
  email text not null unique,
  password text not null,
  profile_image text
);

create table tracks (
  track_id int primary key,
  name text not null,
  artist text,
  album text,
  album_image text
);

create table playlists (
  playlist_id int auto_increment primary key,
  user_id int,
  name text not null,
  image text,
  foreign key (user_id) references users(user_id)
);

create table playlist_tracks (
  playlist_id int,
  track_id int,
  order int,
  primary key (playlist_id, track_id),
  foreign key (playlist_id) references playlists(playlist_id),
  foreign key (track_id) references tracks(track_id)
);

create table favorite_playlists (
  playlist_id int,
  user_id,
  foreign key (playlist_id) references playlists(playlist_id),
  foreign key (user_id) references users(user_id)
);