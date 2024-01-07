create table profiles (
  profile_id int not null primary key,
  username text unique,
  full_name text,
  avatar_url text
);

create table tracks (
  track_id int primary key,
  name text not null,
  artist text,
  album text,
  album_image text
);

create table playlists (
  playlist_id int primary key,
  profile_id int,
  name text not null,
  image text,
  foreign key (profile_id) references profiles(profile_id)
);

create table playlist_tracks (
  playlist_id int,
  track_id int,
  rank int,
  primary key (playlist_id, track_id),
  foreign key (playlist_id) references playlists(playlist_id),
  foreign key (track_id) references tracks(track_id)
);

create table favorite_playlists (
  playlist_id int,
  profile_id int,
  foreign key (playlist_id) references playlists(playlist_id),
  foreign key (profile_id) references profiles(profile_id)
);